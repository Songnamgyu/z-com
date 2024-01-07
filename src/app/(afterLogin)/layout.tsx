const afterLoginLayout = ({children}: {
    children: React.ReactNode
}) => {
    return <div>
        애프터 레이아웃
        {children}
    </div>
}
export default afterLoginLayout;