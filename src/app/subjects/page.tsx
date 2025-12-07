const subjects = () => {
    return (
        <div className="w-7/12 mx-auto">
            <div className="relative flex f overflow-x-auto dark:bg-gray-50 shadow-sm rounded-lg border border-gray-200">

                <div className="w-full text-sm text-left rtl:text-right text-gray-700">
                        <div className="flex h-20 bg-amber-300 justify-between">
                            <button className="px-6 py-3 font-medium rounded-lg border-gray-400 shadow-lg">Product name</button>
                            <button className="px-6 py-3 font-medium rounded-lg border-gray-400 shadow-lg">Color</button>
                            <button className="px-6 py-3 font-medium rounded-lg border-gray-400 shadow-lg">Categorbutton</button>
                            <button className="px-6 py-3 font-medium rounded-lg border-gray-400 shadow-lg">Price</button>
                            <button className="px-6 py-3 font-medium rounded-lg border-gray-400 shadow-lg">Stock</button>
                        </div>
                    <div>
                        <div className="bg-white border-b flex border-gray-200">
                            <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Apple MacBook Pro 17"
                            </div>
                            <div className="px-6 py-4">Silver</div>
                            <div className="px-6 py-4">Laptop</div>
                            <div className="px-6 py-4">$2999</div>
                            <div className="px-6 py-4">231</div>
                        </div>

                        <div className="bg-white border-b flex border-gray-200">
                            <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Microsoft Surface Pro
                            </div>
                            <div className="px-6 py-4">White</div>
                            <div className="px-6 py-4">Laptop PC</div>
                            <div className="px-6 py-4">$1999</div>
                            <div className="px-6 py-4">423</div>
                        </div>

                        <div className="bg-white flex">
                            <div className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Magic Mouse 2
                            </div>
                            <div className="px-6 py-4">Black</div>
                            <div className="px-6 py-4">Accessories</div>
                            <div className="px-6 py-4">$99</div>
                            <div className="px-6 py-4">121</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default subjects;
