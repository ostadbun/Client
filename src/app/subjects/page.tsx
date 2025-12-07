const subjects = () => {
    return (
        <div className="w-7/12">
            <div className="relative justify-center f overflow-x-auto dark:bg-gray-50 shadow-sm rounded-lg border border-gray-200">

                <table className="w-full text-sm text-left rtl:text-right text-gray-700">
                    <thead className="text-sm text-gray-700 bg-gray-100 border-b border-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">Product name</th>
                            <th scope="col" className="px-6 py-3 font-medium">Color</th>
                            <th scope="col" className="px-6 py-3 font-medium">Category</th>
                            <th scope="col" className="px-6 py-3 font-medium">Price</th>
                            <th scope="col" className="px-6 py-3 font-medium">Stock</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">231</td>
                        </tr>

                        <tr className="bg-white border-b border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">White</td>
                            <td className="px-6 py-4">Laptop PC</td>
                            <td className="px-6 py-4">$1999</td>
                            <td className="px-6 py-4">423</td>
                        </tr>

                        <tr className="bg-white">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">Black</td>
                            <td className="px-6 py-4">Accessories</td>
                            <td className="px-6 py-4">$99</td>
                            <td className="px-6 py-4">121</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default subjects;
