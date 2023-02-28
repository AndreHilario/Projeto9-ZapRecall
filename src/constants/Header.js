
export default function Header(props) {
    const {logo} = props;
    return (
        <header>
            <img src={logo} alt="Logo do ZapRecall" />
            <h1>ZapRecall</h1>
        </header>
    );
}