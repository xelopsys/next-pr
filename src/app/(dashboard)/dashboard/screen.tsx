'use client';

import { MetricsChart04 } from '@/components/application/metrics/metrics';
import { PaginationCardMinimal } from '@/components/application/pagination/pagination';
import { ProgressBarTextRight } from '@/components/application/progress-indicators/progress-indicators';
import { Table, TableCard } from '@/components/application/tables/Table';
import { TabList, Tabs } from '@/components/application/tabs/tabs';
import Button from '@/components/shared/buttons/button';
import { BadgeWithDot } from '@/components/shared/badges/badges';
import {
  ButtonGroup,
  ButtonGroupBase,
} from '@/components/shared/button-groups/button-groups';
import { InputBase } from '@/components/shared/inputs/input';
import { Tooltip } from '@/components/shared/tooltips/tooltips';
import {
  Edit01,
  FilterLines,
  SearchLg,
  SwitchHorizontal01,
  Trash01,
} from '@a-peak-works/untitledui-icons';
import { useState } from 'react';
import { SortDescriptor } from 'react-aria-components';
import { SidebarNavigationSectionDividers } from '@/components/application/app-navigation/sidebar-navigation';

export const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();

  const tabs = [
    { id: 'all', label: 'All sessions' },
    { id: 'direct', label: 'Direct traffic' },
    { id: 'organix', label: 'Organic traffic' },
    { id: 'paid', label: 'Paid traffic' },
    { id: 'mobile', label: 'Mobile users' },
    { id: 'returning', label: 'Returning users' },
  ];

  const pageData = [
    {
      page: 'untitledui.com',
      sessions: 4288,
      avgTime: '1m 24s',
      percentageOfTotal: 62.4,
      folder: 'General',
    },
    {
      page: 'untitledui.com/free-icons',
      sessions: 582,
      avgTime: '1m 8s',
      percentageOfTotal: 8.2,
      folder: 'General',
    },
    {
      page: 'untitledui.com/icons',
      sessions: 464,
      avgTime: '1m 12s',
      percentageOfTotal: 7.6,
      folder: 'General',
    },
    {
      page: 'untitledui.com/components',
      sessions: 446,
      avgTime: '2m 22s',
      percentageOfTotal: 7.2,
      folder: 'General',
    },
    {
      page: 'untitledui.com/pricing',
      sessions: 382,
      avgTime: '48s',
      percentageOfTotal: 7.0,
      folder: 'General',
    },
    {
      page: 'untitledui.com/faqs',
      sessions: 326,
      avgTime: '56s',
      percentageOfTotal: 6.4,
      folder: 'General',
    },
    {
      page: 'untitledui.com/blog',
      sessions: 262,
      avgTime: '1m 14s',
      percentageOfTotal: 5.4,
      folder: 'General',
    },
  ];

  return (
    <div className='flex flex-col bg-primary lg:flex-row'>
      <SidebarNavigationSectionDividers activeUrl='/dashboards' />

      <main className='min-w-0 flex-1 bg-primary pb-12 pt-8'>
        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-5 px-4 lg:px-8'>
            {/* Page header simple with search */}
            <div className='relative flex flex-col gap-5'>
              <div className='flex flex-col gap-4 lg:flex-row lg:justify-between'>
                <div className='flex flex-col gap-0.5 lg:gap-1'>
                  <h1 className='text-primary tt-xl-semi lg:td-xs-semi'>
                    Site traffic
                  </h1>
                </div>
                <div className='flex items-start gap-3'>
                  <Button
                    color='secondary-gray'
                    size='md'
                    iconLeading={SwitchHorizontal01}>
                    Switch dashboard
                  </Button>
                  <Button
                    color='secondary-gray'
                    size='md'>
                    Export report
                  </Button>
                </div>
              </div>
            </div>

            <Tabs
              selectedKey={selectedTab}
              onSelectionChange={(value) => setSelectedTab(value as string)}
              className='inline-flex'>
              <TabList
                type='button-minimal'
                items={tabs}
              />
            </Tabs>
          </div>

          <div className='grid grid-cols-1 gap-5 px-4 lg:grid-cols-3 lg:gap-6 lg:px-8'>
            <MetricsChart04
              title='526'
              subtitle='Total sessions'
              type='simple'
              change='6.0%'
              changeTrend='positive'
              chartColor='text-fg-brand-secondary'
              chartData={[
                { value: 10 },
                { value: 8 },
                { value: 9 },
                { value: 6 },
                { value: 5 },
                { value: 6 },
                { value: 7 },
                { value: 9 },
              ]}
            />
            <MetricsChart04
              title='2:24'
              subtitle='Session duration'
              type='simple'
              change='6.0%'
              changeTrend='positive'
              chartColor='text-fg-brand-secondary'
              chartData={[
                { value: 4 },
                { value: 5 },
                { value: 7 },
                { value: 8 },
                { value: 7 },
                { value: 5 },
                { value: 4 },
                { value: 6 },
                { value: 5 },
                { value: 7 },
              ]}
            />
            <MetricsChart04
              title='316'
              subtitle='Pages per session'
              type='simple'
              change='6.0%'
              changeTrend='positive'
              chartColor='text-fg-brand-secondary'
              chartData={[
                { value: 4 },
                { value: 3 },
                { value: 6 },
                { value: 5 },
                { value: 6 },
                { value: 7 },
              ]}
            />
          </div>

          <div className='flex flex-col gap-6 px-4 lg:px-8'>
            <TableCard.Root className='-mx-4 rounded-none bg-secondary_subtle lg:mx-0 lg:rounded-xl'>
              <TableCard.Header title='Pages and screens' />

              <div className='flex justify-between gap-4 border-b border-secondary px-4 py-3 lg:px-6'>
                <ButtonGroup className='hidden shrink-0 lg:flex'>
                  <ButtonGroupBase isSelected>View all</ButtonGroupBase>
                  <ButtonGroupBase>Public</ButtonGroupBase>
                  <ButtonGroupBase>Private</ButtonGroupBase>
                </ButtonGroup>

                <div className='grid w-full grid-cols-1 gap-3 lg:w-auto lg:grid-cols-[minmax(0,296px),max-content]'>
                  <InputBase
                    size='sm'
                    type='search'
                    placeholder='Search'
                    icon={SearchLg}
                  />

                  <Button
                    iconLeading={FilterLines}
                    color='secondary-gray'
                    size='md'>
                    Filters
                  </Button>
                </div>
              </div>

              <Table
                aria-label='Pages and screens'
                selectionMode='multiple'
                sortDescriptor={sortDescriptor}
                onSortChange={setSortDescriptor}
                className='bg-primary'>
                <Table.Header className='bg-primary'>
                  <Table.Head
                    id='page'
                    label='Page'
                    allowsSorting
                    verticalSortArrows
                    isRowHeader
                    className='w-full'
                  />
                  <Table.Head
                    id='sessions'
                    label='Sessions'
                    allowsSorting
                    verticalSortArrows
                  />
                  <Table.Head
                    id='avgTime'
                    label='Avg time'
                    allowsSorting
                    verticalSortArrows
                  />
                  <Table.Head
                    id='percentageOfTotal'
                    label='% of total'
                    allowsSorting
                    verticalSortArrows
                    className='min-w-[316px]'
                  />
                  <Table.Head
                    id='folder'
                    label='Folder'
                    allowsSorting
                    verticalSortArrows
                  />
                  <Table.Head id='actions' />
                </Table.Header>

                <Table.Body items={pageData}>
                  {(stats) => (
                    <Table.Row id={stats.page}>
                      <Table.Cell className='!font-medium'>
                        {stats.page}
                      </Table.Cell>
                      <Table.Cell>{stats.sessions}</Table.Cell>
                      <Table.Cell>{stats.avgTime}</Table.Cell>
                      <Table.Cell>
                        <ProgressBarTextRight
                          value={stats.percentageOfTotal}
                          valueFormatter={(value) => value.toFixed(1) + '%'}
                        />
                      </Table.Cell>
                      <Table.Cell>
                        <BadgeWithDot
                          color='brand'
                          size='sm'
                          type='modern'>
                          {stats.folder}
                        </BadgeWithDot>
                      </Table.Cell>
                      <Table.Cell className='px-4'>
                        <div className='flex justify-end gap-0.5'>
                          <Tooltip
                            title='Delete'
                            arrow={false}>
                            <Button
                              size='sm'
                              color='tertiary-gray'
                              iconLeading={
                                <Trash01 className='size-4 text-fg-quinary transition-inherit-all group-hover:text-fg-quinary_hover' />
                              }
                            />
                          </Tooltip>
                          <Tooltip
                            title='Edit'
                            arrow={false}>
                            <Button
                              size='sm'
                              color='tertiary-gray'
                              iconLeading={
                                <Edit01 className='size-4 text-fg-quinary transition-inherit-all group-hover:text-fg-quinary_hover' />
                              }
                            />
                          </Tooltip>
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>
              <PaginationCardMinimal
                align='right'
                page={1}
                total={10}
                className='bg-secondary_subtle'
              />
            </TableCard.Root>
          </div>
        </div>
      </main>
    </div>
  );
};
