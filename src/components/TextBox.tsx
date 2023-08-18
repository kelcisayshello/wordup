import "../scss/textbox.scss"

export default function TextBox() {
    return (
        <>
            <div className="textbox-container">
                <textarea 
                    name="textbox" 
                    placeholder="Paste text here . . . "
                    rows={15}
                >
                </textarea>
            </div>
        </>
    )
}