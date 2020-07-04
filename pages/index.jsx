// This is the default catch-all route for your server.
// New routes/paths/pages are created by adding files and folders to the 'pages' folder

import React from 'react'

import HFTitle from '../components/hf-title/HFTitle'

export default function Home() {
  return (
    <div className="container">
      <HFTitle />
    </div>
  )
}
