import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import MusicHeader from "@/components/ui/music-header";
import CarouselPlugin from "@/components/ui/music/music-carousel";
import ResizableDemo from "@/components/ui/music/resizable";

export default function MusicPage() {
  return (
    <div className="max-w-full mx-auto mt-7 px-4">
      <div className="bg-background">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-grow">
            <div className="px-4 py-6 lg:px-8">
              <Tabs defaultValue="music" className="space-y-6">
                <div className="flex items-center justify-between">
                  <TabsList className="flex-grow lg:flex-grow-0 lg:justify-start">
                    <TabsTrigger value="music">Music</TabsTrigger>
                    <TabsTrigger value="podcast">Podcasts</TabsTrigger>
                    <TabsTrigger value="live" disabled>
                      Streams
                    </TabsTrigger>
                  </TabsList>
                  <Button className="ml-auto">
                    <PlusCircledIcon className="mr-2 h-4 w-4" />
                    Add music
                  </Button>
                </div>
                {/* Musiikki välilehti */}
                  <MusicHeader />
                  <Separator className="my-2 w-full" />
                <div className="bg-red-300 justify-center grid grid-cols-2 py-5"> 
                <TabsContent value="music" className="outline-none just">
                  <CarouselPlugin/>
                </TabsContent>
                <ResizableDemo/>
                </div>
                {/* Podcast välilehti */}
                <TabsContent value="podcast">
                  Change your password here.
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
