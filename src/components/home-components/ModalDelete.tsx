import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { TrashIcon } from '@radix-ui/react-icons'

interface listToDo {
    list: any;
    id: number;
    splice?: any;
}

export const ModalDelete: React.FC<listToDo> = (list, {id}) => {

    const handleDelete = () => {
        const newTask = list;
        newTask.splice(id, 1);
        console.log('Hapus')
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'destructive'} size={'icon'}>
                    <TrashIcon className='size-5' />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Hapus ToDoList</DialogTitle>
                    <DialogDescription>
                        <p className='my-3'>
                        Yakin List ini akan di hapus?
                        </p>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <Button variant={'destructive'} >Hapus</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
