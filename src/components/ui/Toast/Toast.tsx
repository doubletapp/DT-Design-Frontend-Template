import { Icons } from 'constants/icons'
import toast from 'react-hot-toast'
import { cc } from 'utils/combineClasses'
import IconButton from '../IconButton'
import styles from './styles.module.scss'

interface Props {
  toastId: string
  message: string
  className?: string
}

const Toast = ({ className, toastId, message }: Props) => {
  return (
    <span className={cc(styles.toastRoot, className)}>
      <span className={styles.toastMessage}>{message}</span>
      <IconButton
        className={styles.closeButton}
        color="fifth"
        size="small"
        onPress={() => toast.dismiss(toastId)}
      >
        {Icons.common.cross}
      </IconButton>
    </span>
  )
}

export default Toast