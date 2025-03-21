import { useState } from 'react'

function Footer() {
  const [showImg, setShowImg] = useState(false)
  const handleShowImg = () => {
    setShowImg(!showImg)
  }

  return (
    <>
      <span>
        This game is proudly <b>Brought to You by The-A-Team</b>!
      </span>
      <div style={{ display: 'flex' }}>
        <button onClick={handleShowImg}>
          {showImg ? 'Hide Img' : 'The A Team'}
        </button>
        {showImg && <img src="/images/a-team-smile.gif" alt="The-A-Team" />}
      </div>
    </>
  )
}

export default Footer
