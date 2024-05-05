import Footer from '@/component/templates/Footer';
import Header from '@/component/templates/Header';

function News() {
    return (
        <div className='   '>
            <Header />
            <div className='main container  flex justify-between  py-[50px] '>
                <div className='left text pr-[30px] w-[50%] '>
                    <div className='flex flex-col gap-[10px] '>
                        <div>
                            <div><span className='text-[20px]  font-medium text-gray-800 text-opacity-50'>12/01/24</span></div>
                            <div><span className='text-[36px] font-medium text-gray-900'>Title</span></div>
                        </div>
                        <div className=' border-b-2 py-[10px]  border-gray-500'><span className='text-[20px] font-normal text-gray-800'>Topic #1</span></div>
                        <div className='  flex flex-col gap-[10px]'>
                            <span className='text-[15px] font-normal  text-gray-800 text-opacity-80'>Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortable cooperation, high-quality teaching and excellent experts oasd ur company Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortable cooperation, high-quality teaching and excellent experts oasd ur company</span>
                            <span className='text-[15px] font-normal text-gray-800 text-opacity-80'>Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortable cooperation, high-quality teaching and excellent experts oasd ur company Our company guarantees comfortable cooperation, high-quality teaching and excellent experts our company guarantees comfortable cooperation, high-quality teaching and excellent experts oasd ur company </span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div><img className='' src="/assits/assits/image/new.png" alt="" /></div>
                </div>
            </div>
            <div className=' flex container gap-[40px] '>
                <div className='flex flex-col pr-[30px] w-[50%] gap-[10px]'>
                    <div className='border-b-2 py-[10px]  border-gray-500 '><span className='text-[20px] font-medium text-gray-800'>Topic #2</span></div>
                    <div className=''><span className='text-[15px]  font-normal text-gray-800 text-opacity-80'>Our company guarantees comfortable cooperation, high-quality teaching and <br /> excellent experts our company guarantees comfortable cooperation, high-quality <br /> teaching and excellent experts oasd ur company</span></div>
                </div>
                <div className='flex flex-col w-[50%] gap-[10px]'>
                    <div className='border-b-2 py-[10px]  border-gray-500 '><span className='text-[20px] font-medium text-gray-800'>Topic #3</span></div>
                    <div className=' pb-[50px]'><span className='text-[15px] font-normal text-gray-800 text-opacity-80'>Our company guarantees comfortable cooperation, high-quality teaching and <br /> excellent experts our company guarantees comfortable cooperation, high-quality <br /> teaching and  excellent experts oasd ur company</span></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default News;
