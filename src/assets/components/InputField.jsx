export default function InputField(props) {
    return (
        <div>
            <input
                onChange={props.onChange}
                className="text-xl md:text-md mt-1 block w-full px-3 py-4 bg-white border rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-customBlue mb-4"
                placeholder={props.placeholder}
                type={props.type}
                required
            />
            <div></div>
        </div>
    );
}
