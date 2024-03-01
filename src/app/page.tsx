'use client'
import { Select } from '@/common/components/select'
import { Button } from '@/common/components/button'
import { Square } from '@/common/components/square'
import { useModes } from '@/common/hooks/useModes'
import { useActivation } from '@/common/hooks/useActivation'
import { useGrid } from '@/common/hooks/useGrid'
import { NotificationsList } from '@/common/components/notificationsList'
import s from './page.module.css'

export default function Home() {
  const { modes, activeMode, onChangeMode } = useModes()
  const { isActivated, toggleActivated } = useActivation()
  const { grid, toggleColor, notifications, clearGrid } = useGrid(modes[activeMode]?.field ?? 0, isActivated)
  const size = modes[activeMode]?.field

  return (
    <main className={`${s.container} ${s.square__container}`}>
      <div>
        <div className={s.chooseMode__container}>
          <Select onChange={onChangeMode} activeModeIndex={activeMode} modes={modes} disabled={isActivated} />
          <Button onClick={toggleActivated} disabled={activeMode === -1}>
            {isActivated ? 'STOP' : 'START'}
          </Button>
          <Button onClick={clearGrid} disabled={!notifications.length}>
            CLEAR
          </Button>
        </div>
        {!!size && <Square toggleColor={toggleColor} grid={grid} size={size} />}
      </div>
      <NotificationsList notifications={notifications} />
    </main>
  )
}
