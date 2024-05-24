import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ModalDelete } from './ModalDelete'

interface listToDo {
    list: { activity: string; description: string }[];
}

export const TableComponent: React.FC<listToDo> = (list) => {
    return (
        <Table>
            <TableCaption>To Do List App</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">No</TableHead>
                    <TableHead className='w-[250px]'>Activity</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-center w-[150px]">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {list.list.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{item.activity}</TableCell>
                        <TableCell>{item.description}</TableCell>
                        <TableCell className="text-center">
                            <ModalDelete list={list} id={index}/>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    )
}
