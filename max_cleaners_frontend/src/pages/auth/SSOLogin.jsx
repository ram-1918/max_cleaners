export default function SSOLogin() {
    const sso_types = [
        {
            idx: 1,
            name: 'facebook',
            symbol: 'f',
            link: '',
            color: 'text-blue-600'
        },
        {
            idx: 2,
            name: 'google',
            symbol: 'G+',
            link: '',
            color: 'text-red-600'
        },
    ];
    return (
        <div className="flex justify-around items-center space-x-2">
            {sso_types.map(
                item => <span key={item.idx} className={`w-10 h-10 flex justify-center items-center rounded-full border border-gray-300 font-bold text-md hover:bg-gray-100 cursor-pointer select-none ${item.color}`}>{item.symbol}</span>
                )
            }
        </div>
    )
}