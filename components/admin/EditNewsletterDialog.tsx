"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "react-hot-toast";

export default function EditNewsletterDialog({ newsletter, onUpdated }: any) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(newsletter.title);
  const [description, setDescription] = useState(newsletter.description);
  const [image, setImage] = useState<File | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    const res = await fetch(`/api/newsletters/${newsletter.id}`, {
      method: "PUT",
      body: formData,
    });

    if (!res.ok) {
      toast.error("Update failed");
      return;
    }

    toast.success("Newsletter updated");
    setOpen(false);
    onUpdated();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Newsletter</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <Label>Description</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <Label>Replace image (optional)</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />
          </div>

          <Button type="submit">Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
