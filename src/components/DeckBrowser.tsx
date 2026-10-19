"use client"
import { mockDecks } from "@/mock/data";
import { FullDeckDto, FullSubjectDto } from "@/shared/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {subjects:FullSubjectDto[]};

export default function DeckBrowser({subjects}:Props){
    const[decks, setDecks] = useState<FullDeckDto[]>(mockDecks);
    const[search, setSearch] = useState("");

    useEffect(()=>{
        // console.log(search);
        let data = mockDecks;
        if(search.trim()){
            data = data.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));
        setDecks(data);
        }
    },[search])

    return(
        <div className="maz-auto max-w-7x1 px-4 py-8">
            <div className="flex flex-col gap-8 md:flex-row">
                {/* <p>komponenta DeckBrowser jer ovde</p> */}
                {/* Sidebar */}
                <aside className="w-full md:w-64 shrink-0">
                    <div className="flex flex-col gap-4 md:sticky md:top-20">
                        {/* Search */}
                        <input 
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        type="text" placeholder="Pretraga spilova" className="w-full rounded border border-gray-200 px-3 py-2" />
                        {/* dugme */}
                        <Link className="inline-flex items-center justify-center rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700" href="/deck-create">
                        + Napravi spil
                        </Link>
                    </div>
                </aside>
                {/* Cards */}

                    <section className="flex-1">
                        {decks.length === 0?(
                            <p className="text-center text-red-500">Nema spilova u pretrazi</p>):
                            (
                        
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {/* jedna kartica */}
                            {decks.map((deck, idx)=>(
                            <div key={deck.id} className="group relative overflow-hiddn rounded-lg border border-gray-200"  >
                                <Image src="https://picsum.photos/300/400" alt="" width={400} height={300} 
                                className="h-40 w-full object-cover transition-transform duration-200 group-hover:scale-105"/>
                                <div className="p-4">
                                    <h3 className="font-semibold"> {deck.name}</h3>
                                    <p className="text-sm"> {
                                            subjects.find((s)=>s.id === deck.subject.id)?.name
                                }</p>
                                </div>
                                <Link href={`/decks/${deck.id}`} className="absolute inset-0"></Link>
                            </div>
                            ))}
                        </div>
                            )}
                    </section>

            </div>
        </div>
    );
}