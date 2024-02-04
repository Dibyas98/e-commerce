import React, { useContext } from 'react'
import { myContext } from '../../context/Data'

export default function Filter() {
  const {mode} = useContext(myContext)
  return (
    <div>
       <div className='container px-4 mx-auto mt-5 '>
                <div className="p-5 bg-gray-100 border border-gray-200 rounded-lg drop-shadow-xl"
                    style={{
                        backgroundColor: mode === 'dark' ? '#282c34' : '',
                        color: mode === 'dark' ? 'white' : '',
                    }}>
                    <div className="relative">
                        <div className="absolute flex items-center h-full ml-2">
                            <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            name="searchkey"
                            id="searchkey"
                            placeholder="Search here"
                            className="w-full px-8 py-3 text-sm border-transparent rounded-md bg-violet-0 outline-0" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }} />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p className="font-medium">
                            Filters
                        </p>
                        <button className="px-4 py-2 text-sm font-medium text-gray-800 rounded-md bg-gray-50hover:bg-gray-200" style={{ color: mode === 'dark' ? 'white' : '' }}>
                            Reset Filter
                        </button>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-3 xl:grid-cols-4">
                            <select className="w-full px-4 py-3 text-sm border-transparent rounded-md bg-gray-50 outline-0 focus:border-gray-500 focus:bg-white focus:ring-0" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                <option value="jacket">Jacket</option>
                                <option value="shirt">shirt</option>
                                <option value="mobile">mobile</option>
                                <option value="jacket">Jacket</option>
                            </select>
                            <select className="w-full px-4 py-3 text-sm border-transparent rounded-md bg-gray-50 outline-0 focus:border-gray-500 focus:bg-white focus:ring-0" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                <option value="100">100</option>
                                <option value="200">200</option>
                                <option value="300">300</option>
                                <option value="400">400</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
