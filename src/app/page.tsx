"use client"

import { ModalAdd } from "@/components/home-components/ModalAdd";
import { ModeToggle } from "@/components/home-components/Button-theme";
import { TableComponent } from "@/components/home-components/TableComponent";
import { useState } from "react";

export default function Home() {

    const [activity, setActivity] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [toDoList, setToDoList] = useState<{ activity: string; description: string }[]>([]);
    // console.log("toDoList : ", toDoList);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setToDoList([...toDoList, { activity, description }]);
        setActivity('');
        setDescription('');
        // console.log("activity : ", activity, " description : ", description);
    };

    return (
        <>
            <header className="flex w-full items-center justify-between p-5 font-semibold">
                <h1>Alienymous</h1>
                <ModeToggle />
            </header>
            <section className="w-full p-5 flex flex-col gap-5">
                <ModalAdd activityFunc={setActivity} descriptionFunc={setDescription} handleSubmit={handleSubmit} activityVal={activity} descriptionVal={description} />
                <TableComponent list={toDoList} />
            </section>
        </>
    );
}
