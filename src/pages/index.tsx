import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */
export type FilterType = 'all' | 'pending' | 'completed'

const tabOptions = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'completed', label: 'Completed' },
]
const Index = () => {
  const [filter, setFilter] = useState<FilterType>('all')
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        {/* <div className="pt-10">
          <TodoList />
        </div> */}
        <div className="pt-10">
          <Tabs.Root
            defaultValue="all"
            value={filter}
            onValueChange={(value) =>
              setFilter(value as 'all' | 'pending' | 'completed')
            }
          >
            <Tabs.List className="mb-[40px] flex justify-start gap-2 ">
              {tabOptions.map(({ value, label }) => (
                <Tabs.Trigger
                  key={value}
                  value={value}
                  className={`rounded-[20px] border border-[#E2E8F0] px-[24px] py-2 text-[14px] font-[700] ${
                    filter === value
                      ? 'bg-[#334155] text-white'
                      : 'bg-white text-[#334155]'
                  }`}
                >
                  {label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <Tabs.Content value="all">
              <TodoList filter="all" />
            </Tabs.Content>
            <Tabs.Content value="pending">
              <TodoList filter="pending" />
            </Tabs.Content>
            <Tabs.Content value="completed">
              <TodoList filter="completed" />
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
