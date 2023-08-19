import "../scss/textbox.scss"

interface TextBoxProps {
    onchange: React.ChangeEventHandler<HTMLTextAreaElement>
}

export default function TextBox({onchange}: TextBoxProps) {
    return (
        <>
            <div className="textbox-container">
                <textarea 
                    id={"textbox"}
                    name="textbox" 
                    placeholder="Paste your text here . . . "
                    rows={15}
                    onChange={onchange}
                    spellCheck="true"
                />
            </div>
        </>
    )
}