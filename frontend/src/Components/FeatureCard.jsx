export function FeatureCard(props) {
    return (
        <div className="m-2 sm:m-4 p-4 bg-white rounded-lg shadow-md flex flex-col justify-between sm:w-72 md:w-80">
            <img className="rounded-lg border border-gray-300 m-auto mb-4" src={props.cardimage} alt={props.title} />
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{props.title}</h3>
                <p className="text-sm text-gray-600">{props.description}</p>
            </div>
        </div>
    );
}
    