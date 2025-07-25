
const ContactUs = () =>{

    return(
        <div className='flex justify-center items-center flex-col pb-[80px]'>
            <h1 className='mt-32 text-2xl font-bold my-4'>Contact Us</h1>
            <div className= 'flex justify-center flex-col'>
            <input type='text' className='py-2 px-8 my-2  border border-black' placeholder='name'></input>
            <input type='text' className='py-2 px-8 my-8  border border-black' placeholder='message'></input>
            <button className='border border-black p-2 m-2 cursor-pointer bg-gray-200 rounded-lg text-xl'>submit</button>
            </div>
        </div>
    );
}
export default ContactUs;