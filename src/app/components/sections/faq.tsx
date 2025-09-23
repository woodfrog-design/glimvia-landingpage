import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedSection } from '../animated-section';

const faqItems = [
    {
        question: "What is Glimvia?",
        answer: "Glimvia is an independent, mobile-first client for Apache Superset. It allows you to access your dashboards, charts, and data insights from your phone, with an interface optimized for mobile devices."
    },
    {
        question: "I cannot log in. What should I do?",
        answer: "Please ensure your Superset instance URL is correct, including 'http://' or 'https://'. Double-check your username and password. If your instance uses SSO (like Google or Okta), that is not yet supported."
    },
    {
        question: "My dashboard is not loading or shows a blank screen.",
        answer: "This can happen due to network issues or if a chart on the dashboard is too complex for mobile rendering. Try pulling down to refresh. If the problem persists, check your connection and the dashboard's complexity on desktop."
    },
    {
        question: "Why am I getting an 'Invalid Credentials' error?",
        answer: (<span>This means the username or password you entered is incorrect. Please verify your credentials for the Superset instance you are trying to connect to. Remember that passwords are case-sensitive. The error message is: <code className='bg-muted text-muted-foreground rounded-sm px-1 py-0.5 text-sm'>Invalid Credentials</code></span>)
    },
    {
        question: "How do I switch between dashboards?",
        answer: "You can navigate between your dashboards using the main list on the home screen. You can also favorite dashboards to have them appear at the top for quick access."
    },
    {
        question: "Can I use Glimvia on desktop?",
        answer: "Glimvia is designed as a mobile-first application. While you can run it on a desktop simulator, the primary and intended use case is on iOS and Android devices. For desktop, we recommend using the standard Apache Superset web interface."
    },
    {
        question: "The app logs me out automatically. Why?",
        answer: "For security, Glimvia respects the session timeout configured on your Superset instance. If your session expires, you will be logged out automatically. You may need to ask your Superset administrator to adjust session length if needed."
    },
    {
        question: "What should I do if the app crashes?",
        answer: "If the app crashes, please try restarting it. If the issue continues, please report it through the 'Support' page, providing as much detail as possible about what you were doing when it crashed."
    },
    {
        question: "Why are some charts shown as tables?",
        answer: "Glimvia supports a wide range of Superset's core visualizations. However, some highly custom or complex chart types may not be fully supported for mobile rendering. In these cases, Glimvia displays the underlying data in a table format to ensure you can still access the information."
    }
];

export default function Faq() {
  return (
    <AnimatedSection id="faq" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <div className="mt-16 mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </AnimatedSection>
  );
}
