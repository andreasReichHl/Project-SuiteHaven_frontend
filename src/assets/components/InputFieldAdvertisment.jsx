export default function InputFieldAdvertisment(props) {
    return (
        <div>
            <input
                onChange={props.onChange}
                className="text-xl md:text-md w-full block px-3 py-4 bg-white border border-customPayne rounded-md shadow-sm focus:outline-none focus:border-customBlue mb-4"
                placeholder={props.placeholder}
                type={props.type}
                required
            />
            <div></div>
        </div>
    );
}
