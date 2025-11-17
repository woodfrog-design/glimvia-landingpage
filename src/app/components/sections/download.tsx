import { AnimatedSection } from "../animated-section";
import { OSAwareDownloadBadges } from "../os-aware-download-badges";

export default function Download() {
  return (
    <AnimatedSection id="download" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative isolate overflow-hidden bg-background px-6 py-24 text-center rounded-2xl sm:px-16 border shadow-feature-card hover:shadow-feature-card-hover transition-all duration-300">
                 <div
                    className="absolute -z-10 inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"
                 />
                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
                    Get Glimvia Today
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                    Start exploring your data on the go. Glimvia is always free for core features and ready to use instantly.
                </p>
                
                <div className="mt-10">
                    <OSAwareDownloadBadges 
                        iosHref="https://apps.apple.com/us/app/id6754613388"
                        androidHref="https://play.google.com/store/apps/details?id=tech.woodfrog.glimvia&pcampaignid=web_share"
                    />
                </div>
            </div>
        </div>
    </AnimatedSection>
  );
}