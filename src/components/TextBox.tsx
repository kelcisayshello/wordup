import "../scss/textbox.scss"

interface TextBoxProps {
    onchange: React.ChangeEventHandler<HTMLTextAreaElement>
    usertext: string
}

export default function TextBox({onchange, usertext}: TextBoxProps) {
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
                    value={usertext}
                />
            </div>
        </>
    )
}