export default function Page({ params }) {
    return (
        <main className="flex flex-col justify-center items-center min-h-[100vh]">
            {params.id}
        </main>
    );
}