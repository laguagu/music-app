import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import MusicContent from "@/components/ui/music-content";

export default function MusicPage() {
  return (
    <div className="max-w-full mx-auto mt-7 px-4">
      <div className="flex items-center justify-between mb-4">

        <Tabs defaultValue="music" className="flex-grow">
          <TabsList className="bg-gray-100">
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="podcast">Podcasts</TabsTrigger>
            <TabsTrigger value="live" disabled>Streams</TabsTrigger>
          </TabsList>
        </Tabs>

        <Button className="ml-4">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          Add music
        </Button>
      </div>
      

      <Tabs defaultValue="music" className="flex-grow">
        <TabsContent value="music" className="outline-none">
          <MusicContent />
        </TabsContent>
        <TabsContent value="podcast">Change your password here.</TabsContent>
      </Tabs>
      
      <Separator className="my-4 w-full" />
    </div>
  );
}
