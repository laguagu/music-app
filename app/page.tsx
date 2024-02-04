import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import MusicHeader from "@/components/ui/music-header";
import CarouselSize from "@/components/ui/discover/music-carousel";

export default function MusicPage() {
  return (
    <div className="max-w-full mx-auto mt-7 px-4">
      {/* Välilehdet ja Lisää musiikkia -nappi samassa ylä-tason konteinerissa */}
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
                <TabsContent value="music" className="outline-none">
                  <MusicHeader />
                  <Separator className="my-4 w-full" />
                  <CarouselSize />
                </TabsContent>
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
