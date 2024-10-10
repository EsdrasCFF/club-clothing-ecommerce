interface TitleProps {
  text: string
}
export function Title({ text }: TitleProps) {
  return <h2 className="text-xl font-semibold capitalize leading-none text-black3">{text}</h2>
}
