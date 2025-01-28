'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { NewsletterProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import { Input } from './ui/input';
import { Button } from './ui/button';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { toast } from 'sonner';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email!',
  }),
});

const Newsletter = ({ className, ...props }: NewsletterProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    const authToken = process.env.HASHNODE_AUTH_TOKEN!;
    setIsLoading(true);

    try {
      const response = await fetch('https://gql.hashnode.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
        body: JSON.stringify({
          query: `
            mutation {
              subscribeToNewsletter(input: {
                publicationId: "64670bf87bd6d2e2dc872ef5"
                email: "${value.email}"
              }) {
              status
              }
            }
          `,
        }),
      });
      if (response.status === 200)
        toast.success('Subscribed to the newsletter!', {
          description: 'Check your inbox for the confirmation email.',
        });
      else
        toast.error('Subscription failed!', {
          description:
            "Something went wrong. Please send an email to contact@praveshsudha.com, and I'll resolve it soon.",
        });
    } catch (error) {
        console.error('Error during subscription:', error);
      toast.error('Subscription failed!', {
        description:
          "Something went wrong. Please send an email to contact@praveshsudha.com, and I'll resolve it soon.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="newsletter"
      className={cn(
        className,
        'py-10 md:py-16 lg:py-20 before:w-full before:h-1/2 relative z-0 bg-accent before:-z-10 before:absolute before:bottom-0 before:left-0 before:bg-gray-800'
      )}
      {...props}
    >
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-100 -z-10"></div>
      <ViewContainer className="flex justify-between p-10 md:p-12 lg:p-16 bg-white shadow-xl rounded-lg flex-col md:flex-row gap-8 lg:gap-10">
        <div className="grow">
          <h2 className="text-2xl md:text-[28px] font-semibold">
            Join the Newsletter
          </h2>
          <p className="text-gray-500 text-lg md:text-[20px] mt-2 md:mt-3">
            Get the latest insights and updates straight to your inbox.
          </p>
        </div>
        <Form {...form}>
          <form className="grow" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-2 flex-col md:flex-row items-start">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                Subscribe
              </Button>
            </div>
            <p className="text-sm md:text-base text-gray-500 mt-2">
              Your privacy is important. Your email will never be shared.
            </p>
          </form>
        </Form>
      </ViewContainer>
    </section>
  );
};

export default Newsletter;