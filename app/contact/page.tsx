import { StoreHeader } from "@/components/store-header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

// Assuming Textarea component exists in shadcn/ui or can be used as standard HTML for now if missing.
// I'll check components first, but standard shadcn usually has textarea.
// If it's not in the file list I saw earlier (it wasn't in the initial `ls` of ui folder), I'll use a standard textarea with shadcn-like styling.

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <StoreHeader />
      <main className="flex-1">
        <PageHeader
          title="Contact Us"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />

        <section className="container mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="prose">
                <h3 className="text-2xl font-playfair font-bold uppercase mb-4">
                  Get In Touch
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamus parum claram, anteposuerit
                  litterarum formas humanitatis per seacula quarta decima et
                  quinta decima.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 border border-gray-200 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-1">
                      Address
                    </h4>
                    <p className="text-xs text-gray-500">
                      221b Baker Street,
                      <br />
                      London, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 border border-gray-200 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-1">
                      Phone
                    </h4>
                    <p className="text-xs text-gray-500">
                      (+01) 123 - 456 - 789
                      <br />
                      (+01) 987 - 654 - 321
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 border border-gray-200 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-1">
                      Email
                    </h4>
                    <p className="text-xs text-gray-500">
                      titanium@support.com
                      <br />
                      help@titanium.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 border border-gray-200 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest mb-1">
                      Working Hours
                    </h4>
                    <p className="text-xs text-gray-500">
                      Mon - Fri: 9:00 - 20:00
                      <br />
                      Sat & Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#f9f9f9] p-8 md:p-12">
              <h3 className="text-2xl font-playfair font-bold uppercase mb-6">
                Send Us A Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold uppercase tracking-widest"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      className="bg-white border-transparent focus:border-black rounded-none h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold uppercase tracking-widest"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      className="bg-white border-transparent focus:border-black rounded-none h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-xs font-bold uppercase tracking-widest"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    className="bg-white border-transparent focus:border-black rounded-none h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-widest"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your Message"
                    className="flex w-full rounded-none border border-transparent bg-white px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-black disabled:cursor-not-allowed disabled:opacity-50"
                  ></textarea>
                </div>

                <Button className="w-full md:w-auto px-8 py-6 uppercase tracking-widest font-bold text-xs rounded-none bg-black text-white hover:bg-gray-800">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="w-full h-[400px] bg-gray-200 relative grayscale">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-400 font-bold text-2xl tracking-widest">
              GOOGLE MAP
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
