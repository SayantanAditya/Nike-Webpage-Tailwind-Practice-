function Button({label, iconURL}) {
  return (
    <button className="flex justify-center items-center bg-coral-red gap-2 text-white rounded-full px-7 py-4 border font-montserrat text-lg leading-none border-coral-red" >
      {label}
      <img src={iconURL}
      alt="arrow right icon"
      className="ml-2 rounded-full w-5 h-5" />
    </button>
  )
}

export default Button