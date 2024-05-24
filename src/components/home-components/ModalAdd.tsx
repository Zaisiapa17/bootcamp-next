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
import { Label } from '../ui/label'
import { Input } from '../ui/input'

interface ToDoProps {
    activityFunc: Function;
    descriptionFunc: Function;
    activityVal: string;
    descriptionVal: string;
    handleSubmit: any;
}

export const ModalAdd: React.FC<ToDoProps> = ({ activityFunc, descriptionFunc, handleSubmit, activityVal, descriptionVal}) => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'outline'}>Tambah</Button>
            </DialogTrigger>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Tambah ToDoList</DialogTitle>
                        <DialogDescription>
                            <div className="grid w-full items-center gap-1.5 my-3">
                                <Label htmlFor="activity">Activity</Label>
                                <Input type="text" id="activity" placeholder="Activity" onChange={(e) => activityFunc(e.target.value)} value={activityVal} />
                            </div>
                            <div className="grid w-full items-center gap-1.5 my-3">
                                <Label htmlFor="description">Description</Label>
                                <Input type="text" id="description" placeholder="Description" onChange={(e) => descriptionFunc(e.target.value)} value={descriptionVal} />
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose>
                            <Button variant={'outline'} type='submit'>Tambah</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
