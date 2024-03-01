import type { FC} from 'react'
import { useRef } from 'react'
import s from './notificationsList.module.css'
import { useAutoScroll } from '@/common/hooks/useAutoScroll'

interface INotificationsProps {
  notifications: string[];
}

export const NotificationsList: FC<INotificationsProps> = ({
  notifications,
}) => {
  const listRef = useRef<HTMLUListElement>(null)
  useAutoScroll(listRef.current ?? listRef.current, notifications.length)

  return (
    <div className={s.notificationsContainer}>
      <h2 className={s.title}>Hover squares</h2>
      <ul ref={listRef} className={s.list}>
        {notifications.map((item) => (
          <li className={s.list__item} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
