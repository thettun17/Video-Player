type AsyncType<T> = Promise<T>;

interface Params {
    id: string;
}

import { SidebarTrigger } from "@/components/ui/sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Separator } from "@/components/ui/separator";
import SelectedMovie from "@/components/movies/selected-movie";

export default async function Page({ params }: { params: AsyncType<Params> }) {
    const id = (await params).id;
    const movie = {
        title: "The Day of the Jackal",
        image: "https://images.metahub.space/poster/small/tt29268110/img",
    }
    return (
        <>
            <header className="flex items-center justify-between h-16 border-b px-4 ">
                <div className="flex shrink-0 items-center">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="/videos">Videos</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{movie.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <SelectedMovie selectedItem={movie} isDetail={true} />
        </>
    )
}



