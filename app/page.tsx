import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircledIcon } from "@radix-ui/react-icons"

export default function MusicPage() {
  return (
    <div className="flex justify-around md:flex-row md:overflow-hidden mt-7">
      <div className="flex">
        <Tabs defaultValue="music" className="h-full">
          <TabsList className="bg-gray-100 ">
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="podcast">Podcasts</TabsTrigger>
            <TabsTrigger value="live" disabled>
              Streams
            </TabsTrigger>
          </TabsList>
          <TabsContent value="music">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="podcast">Change your password here.</TabsContent>
        </Tabs>
      </div>

      <div className="flex justify-start">
        
        <Button variant="default"><PlusCircledIcon className="mr-2 h-4 w-4" />Add music</Button>
      </div>
      <div className="flex justify-end"></div>
    </div>
  );
}

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
//       <div className="w-full flex-none md:w-64">
//         <SideNav />
//       </div>
//       <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
//     </div>
//   );
// }
