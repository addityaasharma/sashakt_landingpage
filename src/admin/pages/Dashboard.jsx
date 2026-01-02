import React, { useEffect, useRef, useState } from 'react';
import { Upload, Save, Eye, FileText, Loader } from 'lucide-react';

const BlogEditor = () => {
  const editorRef = useRef(null);
  const editorInstance = useRef(null);
  const [title, setTitle] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Single API Configuration
  const API_CONFIG = {
    endpoint: 'http://164.52.220.61:8000/user/blog',
    authToken: localStorage.getItem('token')
  };

  // Function to convert Editor.js blocks to HTML
  const editorDataToHtml = (blocks) => {
    let html = '';

    blocks.forEach(block => {
      switch (block.type) {
        case 'header':
          html += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
          break;

        case 'paragraph':
          html += `<p>${block.data.text}</p>`;
          break;

        case 'list':
          const listTag = block.data.style === 'ordered' ? 'ol' : 'ul';
          html += `<${listTag}>`;
          block.data.items.forEach(item => {
            html += `<li>${item}</li>`;
          });
          html += `</${listTag}>`;
          break;

        case 'checklist':
          html += '<ul class="checklist">';
          block.data.items.forEach(item => {
            const checked = item.checked ? 'checked' : '';
            html += `<li><input type="checkbox" ${checked} disabled> ${item.text}</li>`;
          });
          html += '</ul>';
          break;

        case 'quote':
          html += `<blockquote>
            <p>${block.data.text}</p>
            ${block.data.caption ? `<cite>${block.data.caption}</cite>` : ''}
          </blockquote>`;
          break;

        case 'code':
          html += `<pre><code>${block.data.code}</code></pre>`;
          break;

        case 'delimiter':
          html += '<hr>';
          break;

        case 'raw':
          html += block.data.html;
          break;

        case 'warning':
          html += `<div class="warning">
            <h4>${block.data.title}</h4>
            <p>${block.data.message}</p>
          </div>`;
          break;

        case 'table':
          html += '<table border="1">';
          block.data.content.forEach((row, index) => {
            html += '<tr>';
            row.forEach(cell => {
              const tag = index === 0 ? 'th' : 'td';
              html += `<${tag}>${cell}</${tag}>`;
            });
            html += '</tr>';
          });
          html += '</table>';
          break;

        case 'image':
          html += `<figure>
            <img src="${block.data.file.url}" alt="${block.data.caption || ''}" />
            ${block.data.caption ? `<figcaption>${block.data.caption}</figcaption>` : ''}
          </figure>`;
          break;

        case 'embed':
          html += `<div class="embed">
            <iframe src="${block.data.embed}" frameborder="0" allowfullscreen></iframe>
            ${block.data.caption ? `<p>${block.data.caption}</p>` : ''}
          </div>`;
          break;

        case 'linkTool':
          html += `<div class="link-preview">
            <a href="${block.data.link}" target="_blank">
              ${block.data.meta.image ? `<img src="${block.data.meta.image.url}" alt="">` : ''}
              <h4>${block.data.meta.title}</h4>
              <p>${block.data.meta.description}</p>
            </a>
          </div>`;
          break;

        case 'attaches':
          html += `<div class="attachment">
            <a href="${block.data.file.url}" download="${block.data.file.name}">
              📎 ${block.data.file.name} (${Math.round(block.data.file.size / 1024)}KB)
            </a>
          </div>`;
          break;

        default:
          console.log('Unknown block type:', block.type);
      }
    });

    return html;
  };

  useEffect(() => {
    let isMounted = true;

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initEditor = async () => {
      if (editorInstance.current) return; // Prevent double initialization

      try {
        setIsLoading(true);

        // Load Editor.js core first
        await loadScript('https://cdn.jsdelivr.net/npm/@editorjs/editorjs@2.28.2/dist/editorjs.umd.min.js');

        // Load all plugins
        await Promise.all([
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/header@2.7.0/dist/bundle.min.js'),
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/list@1.8.0/dist/bundle.min.js'),
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/image@2.8.1/dist/bundle.min.js'),
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/embed@2.5.3/dist/bundle.min.js'),
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/quote@2.5.0/dist/bundle.min.js'),
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/code@2.8.0/dist/bundle.min.js'),
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/table@2.2.2/dist/table.min.js'),
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/checklist@1.5.0/dist/bundle.min.js'),
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/delimiter@1.3.0/dist/bundle.min.js'),
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/raw@2.4.0/dist/bundle.min.js'),
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/warning@1.3.0/dist/bundle.min.js'),
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/marker@1.3.0/dist/bundle.min.js'),
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/inline-code@1.4.0/dist/bundle.min.js'),
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/link@2.5.0/dist/bundle.min.js'),
          loadScript('https://cdn.jsdelivr.net/npm/@editorjs/attaches@1.3.0/dist/bundle.min.js')
        ]);

        await new Promise(resolve => setTimeout(resolve, 100));

        if (!editorRef.current || !isMounted) return;

        // Initialize Editor
        editorInstance.current = new window.EditorJS({
          holder: editorRef.current,
          placeholder: 'Start writing your blog post...',
          minHeight: 0,
          tools: {
            header: {
              class: window.Header,
              inlineToolbar: true
            },
            list: {
              class: window.List,
              inlineToolbar: true
            },
            checklist: {
              class: window.Checklist,
              inlineToolbar: true
            },
            quote: {
              class: window.Quote,
              inlineToolbar: true
            },
            code: {
              class: window.CodeTool
            },
            delimiter: window.Delimiter,
            raw: window.RawTool,
            warning: {
              class: window.Warning,
              inlineToolbar: true
            },
            table: {
              class: window.Table,
              inlineToolbar: true
            },
            image: {
              class: window.ImageTool,
              config: {
                uploader: {
                  uploadByFile: async (file) => {
                    return new Promise((resolve) => {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        resolve({
                          success: 1,
                          file: { url: e.target.result }
                        });
                      };
                      reader.readAsDataURL(file);
                    });
                  },
                  uploadByUrl: async (url) => {
                    return { success: 1, file: { url } };
                  }
                }
              }
            },
            embed: {
              class: window.Embed,
              config: {
                services: {
                  youtube: true,
                  twitter: true,
                  instagram: true,
                  codepen: true,
                  vimeo: true,
                  github: true,
                  facebook: true
                }
              }
            },
            linkTool: window.LinkTool,
            attaches: {
              class: window.AttachesTool,
              config: {
                uploader: {
                  uploadByFile: async (file) => {
                    return {
                      success: 1,
                      file: {
                        url: '#',
                        size: file.size,
                        name: file.name,
                        extension: file.name.split('.').pop()
                      }
                    };
                  }
                }
              }
            },
            marker: {
              class: window.Marker
            },
            inlineCode: {
              class: window.InlineCode
            }
          },
          autofocus: true,
          data: {
            blocks: []
          }
        });

        if (!isMounted) {
          if (editorInstance.current) editorInstance.current.destroy();
          return;
        }

        await editorInstance.current.isReady;
        setIsLoading(false);
        setMessage({ type: 'success', text: 'Editor loaded successfully!' });
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);

      } catch (error) {
        console.error('Failed to initialize editor:', error);
        setMessage({ type: 'error', text: 'Failed to load editor: ' + error.message });
        setIsLoading(false);
      }
    };

    initEditor();

    return () => {
      isMounted = false;
      if (editorInstance.current && editorInstance.current.destroy) {
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    };
  }, []);

  const handleSave = async () => {
    if (!editorInstance.current) return;

    if (!title.trim()) {
      setMessage({ type: 'error', text: 'Please enter a title' });
      return;
    }

    setIsSaving(true);
    setMessage({ type: '', text: '' });

    try {
      const savedData = await editorInstance.current.save();

      // Convert Editor.js data to HTML
      const htmlContent = editorDataToHtml(savedData.blocks);

      // Complete HTML document with styling
      const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
        h1, h2, h3, h4, h5, h6 { margin-top: 24px; margin-bottom: 16px; font-weight: 600; }
        p { margin-bottom: 16px; }
        img { max-width: 100%; height: auto; }
        figure { margin: 20px 0; }
        figcaption { text-align: center; color: #666; font-size: 14px; margin-top: 8px; }
        blockquote { border-left: 4px solid #ddd; padding-left: 16px; margin: 16px 0; color: #666; }
        code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-family: monospace; }
        pre { background: #f4f4f4; padding: 16px; border-radius: 4px; overflow-x: auto; }
        pre code { background: none; padding: 0; }
        table { border-collapse: collapse; width: 100%; margin: 20px 0; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
        th { background: #f4f4f4; font-weight: 600; }
        .checklist { list-style: none; padding-left: 0; }
        .checklist li { margin: 8px 0; }
        .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 16px; margin: 16px 0; }
        .warning h4 { margin-top: 0; color: #856404; }
        .embed { position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; }
        .embed iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .link-preview { border: 1px solid #ddd; padding: 16px; margin: 16px 0; border-radius: 4px; }
        .link-preview a { text-decoration: none; color: inherit; }
        .link-preview img { margin-bottom: 12px; }
        .link-preview h4 { margin: 8px 0; color: #007bff; }
        .attachment { background: #f8f9fa; padding: 12px; margin: 12px 0; border-radius: 4px; }
        .attachment a { color: #007bff; text-decoration: none; }
        hr { border: none; border-top: 2px solid #ddd; margin: 24px 0; }
    </style>
</head>
<body>
    <h1>${title}</h1>
    ${htmlContent}
</body>
</html>`;

      const blogData = {
        title: title,
        html: fullHtml,
        htmlContent: htmlContent, // Just the content HTML without full document
        createdAt: new Date().toISOString(),
        blocks: savedData.blocks // Optional: include raw blocks for future editing
      };

      console.log('Sending to API:', blogData);

      // Single API call with all data in HTML format
      const response = await fetch(API_CONFIG.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_CONFIG.authToken}`
        },
        body: JSON.stringify(blogData)
      });

      if (!response.ok) {
        throw new Error('Failed to save blog');
      }

      const result = await response.json();
      console.log('API Response:', result);

      setMessage({ type: 'success', text: 'Blog saved successfully!' });
    } catch (error) {
      console.error('Save error:', error);
      setMessage({ type: 'error', text: 'Failed to save blog: ' + error.message });
    } finally {
      setIsSaving(false);
    }
  };

  const handlePreview = async () => {
    if (!editorInstance.current) return;

    try {
      const savedData = await editorInstance.current.save();
      const htmlContent = editorDataToHtml(savedData.blocks);

      // Open preview in new window
      const previewWindow = window.open('', '_blank');
      previewWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${title || 'Preview'}</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
            h1, h2, h3, h4, h5, h6 { margin-top: 24px; margin-bottom: 16px; font-weight: 600; }
            p { margin-bottom: 16px; }
            img { max-width: 100%; height: auto; }
            figure { margin: 20px 0; }
            figcaption { text-align: center; color: #666; font-size: 14px; margin-top: 8px; }
            blockquote { border-left: 4px solid #ddd; padding-left: 16px; margin: 16px 0; color: #666; }
            code { background: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-family: monospace; }
            pre { background: #f4f4f4; padding: 16px; border-radius: 4px; overflow-x: auto; }
            pre code { background: none; padding: 0; }
            table { border-collapse: collapse; width: 100%; margin: 20px 0; }
            th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            th { background: #f4f4f4; font-weight: 600; }
            .checklist { list-style: none; padding-left: 0; }
            .checklist li { margin: 8px 0; }
            .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 16px; margin: 16px 0; }
            .warning h4 { margin-top: 0; color: #856404; }
            .embed { position: relative; padding-bottom: 56.25%; height: 0; margin: 20px 0; }
            .embed iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
          </style>
        </head>
        <body>
          <h1>${title || 'Untitled Blog'}</h1>
          ${htmlContent}
        </body>
        </html>
      `);
      previewWindow.document.close();

      setMessage({ type: 'info', text: 'Preview opened in new tab' });
      setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    } catch (error) {
      console.error('Preview error:', error);
      setMessage({ type: 'error', text: 'Failed to generate preview' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Blog Editor</h1>
          </div>

          <input
            type="text"
            placeholder="Enter blog title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 text-xl font-semibold border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            disabled={isLoading}
          />
        </div>

        {message.text && (
          <div className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-800' :
              message.type === 'error' ? 'bg-red-100 text-red-800' :
                'bg-blue-100 text-blue-800'
            }`}>
            {message.text}
          </div>
        )}

        {isLoading && (
          <div className="bg-white rounded-lg shadow-md p-12 mb-6 flex flex-col items-center justify-center">
            <Loader className="w-12 h-12 text-blue-600 animate-spin mb-4" />
            <p className="text-gray-600">Loading editor and plugins...</p>
          </div>
        )}

        <div className={`bg-white rounded-lg shadow-md p-6 mb-6 ${isLoading ? 'hidden' : ''}`}>
          <div
            ref={editorRef}
            className="prose max-w-none"
            style={{ minHeight: '400px' }}
          />
        </div>

        {!isLoading && (
          <div className="flex flex-wrap gap-4 justify-end">
            <button
              onClick={handlePreview}
              className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md"
            >
              <Eye className="w-5 h-5" />
              Preview HTML
            </button>

            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isSaving ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Save Blog
                </>
              )}
            </button>
          </div>
        )}

        <div className="mt-6 bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 mb-3">🎯 Single API Integration</h3>
          <div className="bg-white p-4 rounded mb-4">
            <p className="font-semibold text-gray-800 mb-2">API Provider:</p>
            <code className="bg-gray-100 px-3 py-2 rounded block text-sm">
              <a href="https://www.falseidea.com/" target='_blank'>False Idea Studios</a>
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;