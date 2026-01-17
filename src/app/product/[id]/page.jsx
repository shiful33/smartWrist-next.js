import ViewDetails from "@/app/components/ViewDetails";
import { Suspense } from "react";

export default async function Page({ params }) {
    const { id } = await params;

    return (
        <div className="min-h-screen bg-gray-50">
            <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
            }>
                <ViewDetails id={id} />
            </Suspense>
        </div>
    );
}