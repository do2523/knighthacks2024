export default function Questionary() {
    return(
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1>What kind of person are you?</h1>

            <button className="border-2 border-black p-2 rounded-lg">Introvert</button>
            <button className="border-2 border-black p-2 rounded-lg">Extrovert</button>
            <button className="border-2 border-black p-2 rounded-lg">Business</button>
            <button className="border-2 border-black p-2 rounded-lg">Ambivert</button>
        </div>
    )
}