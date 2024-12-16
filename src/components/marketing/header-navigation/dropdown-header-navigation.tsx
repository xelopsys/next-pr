import {
  ArrowRight,
  BarLineChart,
  BookClosed,
  BookOpen01,
  ChartBreakoutCircle,
  CheckCircleBroken,
  Codepen,
  Cube01,
  CurrencyDollarCircle,
  FileCode01,
  Flag06,
  Folder,
  LayersThree01,
  LifeBuoy01,
  LineChartUp05,
  MessageChatCircle,
  MessageCircle01,
  MessageSmileSquare,
  Monitor04,
  PieChart03,
  PlayCircle,
  Signal01,
  Stars02,
  Users01,
} from '@a-peak-works/untitledui-icons';

import Button from '@/components/shared/buttons/button';

import {
  ImageCardHorizontal,
  FeatureCardVertical,
} from './base-components/nav-menu-item-card';
import { NavMenuItemLink } from './base-components/nav-menu-item';
import { FeaturedIconBase } from '@/components/foundations/featured-icon/featured-icons';
import { Badge, BadgeWithDot } from '@/components/shared/badges/badges';

export const DropdownMenuSimple = () => {
  const items = [
    {
      title: 'Blog',
      subtitle:
        'The latest industry new and guides curated by our expert team.',
      href: '/blog',
      Icon: BookClosed,
    },
    {
      title: 'Customer stories',
      subtitle:
        'Learn how our customers are using Untitled UI to 10x their growth.',
      href: '/customer-stories',
      Icon: Stars02,
    },
    {
      title: 'Video tutorials',
      subtitle:
        'Get up and running on our newest features and in-depth guides.',
      href: '/tutorials',
      Icon: PlayCircle,
    },
    {
      title: 'Documentation',
      subtitle:
        'In-depth articles on our tools and technologies to empower teams.',
      href: '/docs',
      Icon: FileCode01,
    },
    {
      title: 'Help and support',
      subtitle:
        'Need help with something? Our expert team is here to help 24/7.',
      href: '/help',
      Icon: LifeBuoy01,
    },
  ];

  return (
    <div className='px-3 pb-2 md:max-w-[336px] md:p-0'>
      <nav className='overflow-hidden rounded-2xl bg-primary py-2 shadow-xs ring-1 ring-border-secondary md:p-2 md:shadow-lg'>
        <ul className='flex flex-col gap-0.5'>
          {items.map(({ title, subtitle, href, Icon }) => (
            <li>
              <NavMenuItemLink
                icon={Icon}
                title={title}
                subtitle={subtitle}
                href={href}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export const DropdownMenuSimpleWithFooter = () => {
  const items = [
    {
      title: 'Blog',
      subtitle:
        'The latest industry new and guides curated by our expert team.',
      href: '/blog',
      Icon: BookClosed,
    },
    {
      title: 'Customer stories',
      subtitle:
        'Learn how our customers are using Untitled UI to 10x their growth.',
      href: '/customer-stories',
      Icon: Stars02,
    },
    {
      title: 'Video tutorials',
      subtitle:
        'Get up and running on our newest features and in-depth guides.',
      href: '/tutorials',
      Icon: PlayCircle,
    },
    {
      title: 'Documentation',
      subtitle:
        'In-depth articles on our tools and technologies to empower teams.',
      href: '/docs',
      Icon: FileCode01,
    },
    {
      title: 'Help and support',
      subtitle:
        'Need help with something? Our expert team is here to help 24/7.',
      href: '/help',
      Icon: LifeBuoy01,
    },
  ];

  return (
    <div className='px-3 pb-2 md:max-w-[336px] md:p-0'>
      <nav className='overflow-hidden rounded-xl bg-secondary shadow-xs ring-1 ring-inset ring-border-secondary md:rounded-2xl md:shadow-lg'>
        <ul className='flex flex-col gap-0.5 rounded-xl bg-primary py-2 ring-1 ring-inset ring-border-secondary md:rounded-t-2xl md:p-2'>
          {items.map(({ title, subtitle, href, Icon }) => (
            <li>
              <NavMenuItemLink
                icon={Icon}
                title={title}
                subtitle={subtitle}
                href={href}
              />
            </li>
          ))}
        </ul>
        <div className='px-4 py-5 text-center sm:px-5'>
          <Button
            href='#'
            color='link-color'
            size='lg'
            iconTrailing={<ArrowRight className='size-5' />}>
            All resources
          </Button>
        </div>
      </nav>
    </div>
  );
};

const menuItemsSimpleTwoColumns = [
  {
    title: 'Blog',
    shortSubtitle: 'The latest industry news.',
    subtitle: 'The latest industry new and guides curated by our expert team.',
    href: '/blog',
    Icon: BookClosed,
  },
  {
    title: 'Customer stories',
    shortSubtitle: 'Learn how our customers.',
    subtitle:
      'Learn how our customers are using Untitled UI to 10x their growth.',
    href: '/customer-stories',
    Icon: Stars02,
  },
  {
    title: 'Video tutorials',
    shortSubtitle: 'New features and techniques.',
    subtitle: 'Get up and running on our newest features and in-depth guides.',
    href: '/tutorials',
    Icon: PlayCircle,
  },
  {
    title: 'Documentation',
    shortSubtitle: 'All the boring stuff.',
    subtitle:
      'In-depth articles on our tools and technologies to empower teams.',
    href: '/docs',
    Icon: FileCode01,
  },
  {
    title: 'Help and Support',
    subtitle: 'Need help with something? Our expert team is here to help 24/7.',
    href: '/help',
    Icon: LifeBuoy01,
  },
  {
    title: 'API reference',
    subtitle:
      'In-depth reference doc and helpful guides for our dashboard API.',
    href: '/api',
    Icon: Codepen,
  },
  {
    title: 'Setup 101',
    subtitle: 'Get up and running as fast as possible with our 101 guide.',
    href: '/setup',
    Icon: Cube01,
  },
  {
    title: 'Podcast',
    subtitle:
      'Interviews and discussion about the industry and the latest tech.',
    href: '/podcast',
    Icon: Signal01,
  },
  {
    title: 'University',
    subtitle:
      'Master your craft with our free video courses and in-depth articles.',
    href: '/university',
    Icon: BookOpen01,
  },
  {
    title: 'Changelog',
    subtitle: 'Check out the latest updates and releases from our team.',
    href: '/changelog',
    Icon: LayersThree01,
  },
];

const megaMenuItems: {
  title: string;
  items: {
    title: string;
    subtitle?: string;
    shortSubtitle?: string;
    href: string;
    Icon: any;
    badge?: any;
  }[];
}[] = [
  {
    title: 'Products',
    items: [
      {
        title: 'Interactive reports',
        shortSubtitle: 'Learn about your users.',
        href: '/',
        Icon: ChartBreakoutCircle,
      },
      {
        title: 'Team dashboard',
        shortSubtitle: 'Monitor your metrics.',
        href: '/',
        Icon: Monitor04,
      },
      {
        title: 'Limitless segmentation',
        shortSubtitle: 'Surface hidden trends.',
        href: '/',
        Icon: PieChart03,
      },
      {
        title: 'Group analytics',
        shortSubtitle: 'Measure B2B accoubt health.',
        href: '/',
        Icon: BarLineChart,
      },
    ],
  },
  {
    title: 'Use cases',
    items: [
      {
        title: 'Convert',
        subtitle: 'Analyze conversion rates and improve your sales.',
        shortSubtitle: 'Analyze conversion rates.',
        href: '/',
        Icon: CheckCircleBroken,
      },
      {
        title: 'Engage',
        subtitle: 'Measure active usage and target areas of improvement.',
        shortSubtitle: 'Measure active usage.',
        href: '/',
        Icon: MessageSmileSquare,
      },
      {
        title: 'Retain',
        subtitle: 'Find retention drivers and make your customers smile.',
        shortSubtitle: 'Find retention drivers.',
        href: '/',
        Icon: CurrencyDollarCircle,
      },
      {
        title: 'Grow',
        shortSubtitle: 'Grow your user base faster.',
        href: '/',
        Icon: LineChartUp05,
        badge: (
          <Badge
            size='md'
            color='gray'
            type='modern'>
            New
          </Badge>
        ),
      },
    ],
  },
  {
    title: 'Company',
    items: [
      {
        title: 'Blog',
        shortSubtitle: 'The latest industry news.',
        subtitle: 'The latest industry news, updates and info.',
        href: '/',
        Icon: BookClosed,
      },
      {
        title: 'Customer stories',
        shortSubtitle: 'Learn how our customers.',
        subtitle: 'Learn how our customers are making big changes.',
        href: '/',
        Icon: Stars02,
      },
      {
        title: 'Video tutorials',
        shortSubtitle: 'New features and techniques.',
        subtitle: 'Get up and running on new features and techniques.',
        href: '/',
        Icon: PlayCircle,
      },
      {
        title: 'Documentation',
        shortSubtitle: 'All the boring stuff.',
        subtitle: "All the boring stuff that you (hopefully won't) need.",
        href: '/',
        Icon: FileCode01,
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        title: 'About us',
        shortSubtitle: 'Learn about our story.',
        subtitle: 'Learn about our story and our mission statement.',
        href: '/',
        Icon: Flag06,
      },
      {
        title: 'Press',
        shortSubtitle: 'News and press resources.',
        subtitle: 'News and writings, press releases, and press resources.',
        href: '/',
        Icon: MessageCircle01,
      },
      {
        title: 'Careers',
        shortSubtitle: 'Join our team!',
        subtitle: "We're always looking for talented people. Join our team!",
        href: '/',
        Icon: Users01,
        badge: (
          <BadgeWithDot
            size='md'
            color='success'
            type='modern'>
            We're hiring!
          </BadgeWithDot>
        ),
      },
      {
        title: 'Legal',
        shortSubtitle: 'All the boring stuff.',
        subtitle: 'All the boring stuff that we Dan from legal made us add.',
        href: '/',
        Icon: Folder,
      },
    ],
  },
];

const articles = [
  {
    title: 'Auto-layout explained',
    subtitle:
      'Jump right in — get an overview of the basics and fundamentals of auto-layout so you can start...',
    imgSrc: '/marketing/auto-layout.png',
  },

  {
    title: 'Top techniques to level up your product design',
    subtitle:
      'The latest best practices and tips from the best in the industry. Learn how to level up your product...',
    imgSrc: '/marketing/conversation.png',
  },
  {
    title: 'Sythesize data like a pro through affinity...',
    subtitle:
      'Synthesis is the mysterious rabbit hole that all data scientists have to learn evenetually. What makes...',
    imgSrc: '/marketing/sythesize.png',
  },
  {
    title: 'Streamline your user research process',
    subtitle:
      'As a user research team of 5 UX researchers, we quickly realized that we’ll need to set up some...',
    imgSrc: '/marketing/conversation.png',
  },
  {
    title: 'How to embrace inclusivity in UX research',
    subtitle:
      'In user experience research, your main job is to consider the user — every user — regardless of...',
    imgSrc: '/marketing/orange-journal.png',
  },
  {
    title: 'The anatomy of great storytelling',
    subtitle: 'Storytelling is everywhere...',
    imgSrc: '/marketing/two-people.png',
  },
  {
    title: 'How to write copy that converts',
    subtitle: 'Improve your conversion rat...',
    imgSrc: '/marketing/sythesize.png',
  },
  {
    title: 'How to create a powerful design presentation',
    subtitle: 'How to create a powerful...',
    imgSrc: '/marketing/story-telling.png',
  },
  {
    title: 'How to communicate the value of design',
    subtitle: "Picture this. You're conducti...",
    imgSrc: '/marketing/value-of-design.png',
  },
];

export const DropdownMenuSimpleTwoColumns = () => {
  return (
    <nav className='px-3 pb-2 md:max-w-[640px] md:p-0'>
      <ul className='grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl bg-primary py-2 shadow-xs ring-1 ring-border-secondary md:grid-cols-2 md:p-2 md:shadow-lg'>
        {menuItemsSimpleTwoColumns.map(({ title, subtitle, href, Icon }) => (
          <li key={title + href}>
            <NavMenuItemLink
              icon={Icon}
              title={title}
              subtitle={subtitle}
              href={href}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const DropdownMenuSimpleTwoColumnsWithFooter = () => {
  return (
    <nav className='px-3 pb-2 md:w-[640px] md:p-0'>
      <div className='flex flex-col overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-border-secondary md:gap-4 md:rounded-2xl md:p-2 md:shadow-lg'>
        <div className='grid grid-cols-1 gap-5 pb-5 pt-4 md:grid-cols-2 md:gap-3 md:p-3 md:pb-0'>
          {megaMenuItems.slice(0, 2).map((nav) => (
            <div key={nav.title}>
              <h3 className='mb-2 px-4 text-brand-tertiary tt-sm-semi md:p-0'>
                {nav.title}
              </h3>
              <ul className='flex flex-col gap-0.5'>
                {nav.items
                  .slice(0, 4)
                  .map(({ title, href, Icon, badge, shortSubtitle }) => (
                    <li key={title}>
                      <NavMenuItemLink
                        icon={
                          <FeaturedIconBase
                            className='shrink-0'
                            color='brand'
                            theme='light'
                            size='lg'>
                            <Icon size={24} />
                          </FeaturedIconBase>
                        }
                        title={title}
                        subtitle={shortSubtitle}
                        badge={badge}
                        href={href}
                      />
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='flex flex-col items-start gap-5 bg-secondary px-4 py-5 md:flex-row md:items-center md:gap-3 md:rounded-md md:px-6 md:py-5'>
          <Button
            color='link-color'
            size='lg'
            href='#'>
            Sign up for free
          </Button>
          <Button
            color='link-color'
            size='lg'
            className='md:ml-auto'
            href='#'
            iconLeading={PlayCircle}>
            Watch demo
          </Button>
          <Button
            color='link-color'
            size='lg'
            href='#'
            iconLeading={MessageChatCircle}>
            Chat to sales
          </Button>
        </div>
      </div>
    </nav>
  );
};

export const DropdownMenuFeatureCard = () => {
  return (
    <div className='px-3 pb-2 md:max-w-[640px] md:p-0'>
      <nav className='flex flex-col overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-border-secondary md:w-max md:flex-row md:rounded-2xl md:shadow-lg'>
        <ul className='flex flex-1 flex-col gap-0.5 pb-3 pt-2 md:p-2'>
          {megaMenuItems[2].items
            .slice(0, 4)
            .map(({ title, subtitle, href, Icon, badge }) => (
              <li key={title + href}>
                <NavMenuItemLink
                  icon={Icon}
                  title={title}
                  subtitle={subtitle}
                  badge={badge}
                  href={href}
                />
              </li>
            ))}
        </ul>
        <div className='bg-secondary px-1 pb-3 pt-2 md:max-w-[304px] md:px-2'>
          <FeatureCardVertical
            imgSrc='/marketing/smiling-girl.png'
            title="We've just released an update!"
            description='Check out the all new dashboard view. Pages now load faster.'
            actionsContent={
              <div className='inline-flex gap-3'>
                <Button
                  color='link-gray'
                  size='sm'
                  href='#'>
                  Dismiss
                </Button>
                <Button
                  color='link-color'
                  size='sm'
                  href='#'>
                  Changelog
                </Button>
              </div>
            }
          />
        </div>
      </nav>
    </div>
  );
};

export const DropdownMenuWithTwoColsAndLinksAndFooter = () => {
  return (
    <div className='px-3 pb-2 md:max-w-[800px] md:p-0'>
      <nav className='overflow-hidden rounded-xl bg-secondary shadow-xs ring-1 ring-inset ring-border-secondary md:rounded-2xl md:shadow-lg'>
        <div className='flex flex-col gap-5 rounded-xl bg-primary pb-5 pt-4 ring-1 ring-inset ring-border-secondary md:gap-6 md:rounded-t-2xl md:p-6 md:pt-5'>
          <div className='flex flex-col gap-1 px-4 md:p-0'>
            <p className='text-primary tt-md-semi'>Resources</p>
            <p className='text-tertiary tt-sm'>
              Get started and learn more about our products.
            </p>
          </div>

          <div className='flex flex-col gap-5 md:flex-row md:gap-8 md:py-0'>
            <div className='-mb-px flex flex-col gap-4 border-b border-b-secondary px-4 pb-5 md:mb-0 md:gap-5 md:border-none md:p-0'>
              <h3 className='text-brand-tertiary tt-sm-semi'>Get started</h3>
              <ul className='flex flex-col gap-3'>
                {[
                  { title: 'Setup 101', href: '#' },
                  { title: 'Adding users', href: '#' },
                  { title: 'Video tutorials', href: '#' },
                  { title: 'Libraries and SDKs', href: '#' },
                  { title: 'Adding plugins', href: '#' },
                  { title: 'Dashboard templates', href: '#' },
                ].map((item) => (
                  <li>
                    <Button
                      href={item.href}
                      color='link-gray'
                      size='lg'>
                      {item.title}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-2'>
              {megaMenuItems.slice(1, 3).map((nav) => (
                <div key={nav.title}>
                  <h3 className='mb-2 px-4 text-brand-tertiary tt-sm-semi md:px-0'>
                    {nav.title}
                  </h3>
                  <ul className='flex flex-col gap-0.5'>
                    {nav.items
                      .slice(0, 3)
                      .map(({ title, subtitle, href, Icon, badge }) => (
                        <li key={title}>
                          <NavMenuItemLink
                            icon={Icon}
                            title={title}
                            subtitle={subtitle}
                            badge={badge}
                            href={href}
                          />
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mx-auto flex max-w-container flex-col px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6'>
          <Button
            href='#'
            color='secondary-gray'
            size='md'
            iconLeading={BookOpen01}
            className='hidden md:flex'>
            Documentation
          </Button>
          <Button
            href='#'
            color='primary'
            size='md'
            className='hidden md:flex'>
            View all resources
          </Button>
          <Button
            href='#'
            color='primary'
            size='sm'
            className='md:hidden'>
            View all resources
          </Button>
        </div>
      </nav>
    </div>
  );
};

export const DropdownMenuFeaturedPosts = () => {
  return (
    <div className='px-3 pb-2 md:max-w-[768px] md:p-0'>
      <nav className='md:w-max-full flex flex-col overflow-hidden rounded-xl bg-primary shadow-xs ring-1 ring-border-secondary md:flex-row md:rounded-2xl md:shadow-lg'>
        <div className='flex flex-1 flex-col gap-3 pb-5 pt-4 md:p-5'>
          <h3 className='px-4 text-brand-tertiary tt-sm-semi md:px-0'>
            {megaMenuItems[2].title}
          </h3>
          <ul className='flex flex-col gap-0.5'>
            {megaMenuItems[2].items
              .slice(0, 4)
              .map(({ title, subtitle, href, Icon, badge }) => (
                <li key={title}>
                  <NavMenuItemLink
                    icon={Icon}
                    title={title}
                    subtitle={subtitle}
                    badge={badge}
                    href={href}
                  />
                </li>
              ))}
          </ul>
        </div>

        <div className='shrink-0 bg-secondary py-5 leading-none md:max-w-[448px] md:p-5 md:pb-6'>
          <h3 className='mb-3 px-4 text-brand-tertiary tt-sm-semi md:px-0'>
            Latest blog posts
          </h3>

          <ul className='flex flex-col gap-1 md:gap-0.5'>
            {articles.slice(0, 3).map((article) => (
              <li key={article.title}>
                <ImageCardHorizontal
                  imgSrc={article.imgSrc}
                  title={article.title}
                  subtitle={article.subtitle}
                />
              </li>
            ))}
          </ul>

          <div className='mt-3 px-4 md:mt-4 md:px-0'>
            <Button
              color='link-color'
              size='md'
              href='#'
              iconTrailing={ArrowRight}>
              All blog posts
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};
