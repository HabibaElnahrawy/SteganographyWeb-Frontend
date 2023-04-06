
import PropTypes from 'prop-types';
import { MediaConfig } from '../MediaConfig'; 
import React, { useRef, useState } from 'react';
import Header from './Header';


const CreateStegoMedia = props => {
    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }
    return (
        <div>
            <Header/>
            <div className='w-full text-white my-24'>
                <div className='w-full h-[800px]  absolute mix-blend-overlay'></div>



                <div className='max-w-[1240px] mx-auto py-12'>
                <div className='text-center py-8 text-slate-700'>
                <h2 className='text-6xl uppercase font-bold'>Create Stego Media </h2>
                <h3 className='text-5xl font-bold text-white py-4'>Extract cover and the secret file from your stego media</h3>
                <p className='text-3xl'>
                Extract cover and the secret file from your stego media
                  </p>
                </div>

                <div className='grid md:grid-cols-2 '>
                <div name='stego file' className=' text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative border-dashed border-2 border-indigo-900 bg-slate-200'>
                <div
                        ref={wrapperRef}
            
                        onDragEnter={onDragEnter}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}>
                        <div className='text-center text-xl p-10'>
                            <img className='w-full' src={MediaConfig} alt="" />
                            <p>Drag & Drop your files here</p>
                        </div>
                        <input className=' opacity-0 top-0 left-0 absolute w-full h-full cursor-pointer' type="file" value="" onChange={onFileDrop} />
                        {
                        fileList.length > 0 ? (
                            <div className="mt-8">
                                <p className="mb-5 ">
                                    Ready to upload
                                </p>
                                {
                                    fileList.map((item, index) => (
                                        <div key={index} className="relative flex mb-2.5 p-4 bg-slate-400 rounded-3xl">
                                            <img className='mr-5 w-12'src={MediaConfig[item.type.split('/')[1]] || MediaConfig['default']} alt="" />
                                            <div className="flex flex-col justify-between ">
                                                <p>{item.name}</p>
                                                <p>{item.size}B</p>
                                            </div>
                                            <span className=" cursor-pointer rounded-full flex items-center w-6 h-6 bg-red-900 justify-center absolute right-2.5 inset-y-1/2 shadow-xl	" onClick={() => fileRemove(item)}>x</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : null
                    }
                    </div>
                </div>
                <div name='cover w el secret'className='bg-slate-200 text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>


                </div>
                </div>




        {/** */}

                </div>
                <div class="flex justify-center ">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Create
                </button>
                  </div>
          </div>
    </div>
    
  )
}
CreateStegoMedia.propTypes = {
    onFileChange: PropTypes.func
}

export default CreateStegoMedia