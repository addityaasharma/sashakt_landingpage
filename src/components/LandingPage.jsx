import React from 'react'
import banner from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import blog4 from '../assets/blog4.png'

const LandingPage = () => {
    return (
        <>
            <section className="h-auto w-full px-6 md:px-12 lg:px-20 py-8 bg-[linear-gradient(#F9D29D99,#F2F3E299,#B2E5F899,#F4B3EF99)]">

                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold max-w-7xl text-center'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium .
                </h1>
                <p className='mt-6 text-base md:text-lg text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium.
                </p>

                <div className='mt-6 w-full'>
                    <img src={banner} alt="banner image" className='rounded-md w-full h-auto object-cover' />
                </div>
                <div className='text-base md:text-lg mt-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error cupiditate voluptates reiciendis quod labore tenetur culpa dicta veniam nesciunt! Similique a iste ut, fugiat saepe odit velit consectetur ex eum. Consectetur esse eum nostrum fugit dolores natus omnis enim repellendus asperiores ab excepturi earum repellat saepe officia optio amet beatae debitis, nesciunt similique consequuntur ducimus necessitatibus tempore! Sapiente ipsam eveniet laudantium suscipit asperiores laboriosam aut? Sit, cupiditate similique! Unde voluptas consequuntur ut molestiae recusandae blanditiis laboriosam earum, rerum quasi. Enim, omnis provident, praesentium neque eum possimus asperiores error facilis illo laudantium est exercitationem voluptates! Iste tenetur magni quidem deserunt?
                </div>

                <div className='text-base md:text-lg mt-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt earum accusamus dolorum et! Quasi accusantium aliquid distinctio, error asperiores nihil, commodi laudantium amet non, aspernatur repellendus dolorem enim! Atque ad veniam architecto voluptates accusamus quia, error culpa laudantium vitae delectus laboriosam deleniti modi quibusdam, eligendi at sapiente deserunt commodi quasi quam cupiditate? Quo quia culpa maxime necessitatibus, cum cupiditate, mollitia explicabo, vero iusto nihil fugit. Alias, quae tenetur vitae nostrum enim libero expedita repudiandae laborum quo culpa. Sint tenetur natus pariatur. Facere a porro ex, sed nulla ratione consequuntur hic possimus enim vero numquam quia, quidem ab iure cumque non!
                </div>

                <div className='mt-10 w-full'>
                    <img src={blog2} alt="banner image" className='rounded-md w-full h-auto object-cover' />
                </div>

                <div className='mt-10 py-4'>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>
                        Where does it come from?
                    </h2>
                    <p className='mt-4 text-base md:text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aliquid optio in sequi obcaecati, porro labore odit reiciendis veniam corrupti cumque possimus voluptas blanditiis dolorum asperiores, ex libero illo et praesentium temporibus quam! Sequi totam a veniam magni? Et qui ad consectetur quibusdam repudiandae aut quisquam veritatis pariatur repellendus sunt doloremque officiis, ullam facere quo itaque incidunt magni enim sed obcaecati, cum nostrum doloribus iusto reprehenderit esse? Fuga quae corrupti culpa! Numquam incidunt fugit non tempore in inventore. Temporibus, similique nostrum suscipit, quibusdam repellendus totam maiores fugiat aut odit fuga obcaecati, exercitationem atque unde quia fugit quam ad! Labore, fugiat!
                    </p>

                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-8 text-center'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit qui laudantium odit voluptate vel.
                    </h2>

                    <div className='mt-8 flex flex-col lg:flex-row items-start gap-6'>
                        <div className='lg:w-1/2'>
                            <p className='text-base md:text-lg'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nihil voluptates architecto, cupiditate possimus minima veniam quaerat qui maxime suscipit temporibus earum necessitatibus molestias exercitationem rem nisi ab doloremque. Aliquid culpa sint saepe veniam cum at officiis nisi veritatis rerum necessitatibus facilis aperiam, molestiae, iste eligendi similique quae voluptas inventore minima natus et iusto? Maxime, similique quae consequuntur explicabo non a molestias fugit perspiciatis enim quisquam odio suscipit eveniet est. Voluptas, cupiditate, quisquam incidunt iusto tempora est laboriosam adipisci eveniet accusamus velit reprehenderit illum sit hic, vel porro veritatis ullam ducimus pariatur optio. Sed, quidem laudantium doloribus quam architecto nesciunt aspernatur veritatis ipsum, quae qui, eum eaque ut exercitationem laborum corrupti doloremque repellat? Ipsa soluta recusandae non magnam officia cupiditate possimus labore at culpa libero, et dolorum! Eos quas repudiandae natus. Aliquid assumenda omnis quod deleniti est architecto eos veritatis nemo, quis sint, possimus a fugiat obcaecati molestiae laudantium! Quidem.
                            </p>
                        </div>

                        <div className='lg:w-1/2 h-[300px] md:h-[400px] lg:h-[470px]'>
                            <img src={blog3} alt="" className="w-full h-full object-cover rounded-md" />
                        </div>
                    </div>
                </div>

                <div className='mt-12'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tenetur amet alias.
                    </h1>
                    <div className='mt-6 w-full'>
                        <img src={blog4} alt="banner image" className='rounded-md w-full h-auto object-cover' />
                    </div>
                    <p className='mt-6 text-base md:text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto architecto sequi obcaecati, ea quia rerum eveniet quibusdam eos autem perspiciatis ad iste omnis. Mollitia numquam accusamus sunt voluptate praesentium delectus nam obcaecati hic! Ipsum, adipisci. Temporibus facilis eveniet ad rerum vel doloremque illo praesentium, neque numquam possimus nam quaerat perferendis ex exercitationem sapiente fugiat. Modi, quia? Dignissimos, recusandae, soluta officia autem quaerat saepe, quo quam necessitatibus repellat ab earum sit. Voluptas, incidunt numquam error quidem rerum eius eum dolores eveniet placeat unde atque aperiam distinctio ea optio quae vero veniam ullam excepturi expedita voluptatum. Saepe voluptatem quos quam necessitatibus natus.
                    </p>
                </div>
            </section>
        </>
    )
}

export default LandingPage