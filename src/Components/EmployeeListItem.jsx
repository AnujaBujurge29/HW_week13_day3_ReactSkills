import React from 'react'

export default function EmployeeListItem() {
  return (
    <div className='employeeListItem'>
        <div className="employee">
        <img src="../src/images/imageJames.jpg" className="image" alt="icon" />
        <div className="name">
          <h3>James King</h3>
          <h3 className="jobTitle">President and CEO</h3>
        </div>
      </div>
      <div className="employee">
        <img src="../src/images/imageJuie.png" className="image" alt="icon" />
        <div className="name">
          <h3>Julie Taylor </h3>
          <h3 className="jobTitle"> VP of Marketing</h3>
        </div>
      </div>
      <div className="employee">
        <img src="../src/images/imageEugene.jpg" className="image" alt="icon" />
        <div className="name">
          <h3>Eugene Lee</h3>
          <h3 className="jobTitle">CFO</h3>
        </div>
      </div>
      <div className="employee">
        <img src="../src/images/imageJohn.jpg" className="image" alt="icon" />
        <div className="name">
          <h3>John Williams</h3>
          <h3 className="jobTitle">VP of Engineering</h3>
        </div>
      </div>
      <div className="employee">
        <img src="../src/images/imageRay.jpg" className="image" alt="icon" />
        <div className="name">
          <h3>Ray Moore</h3>
          <h3 className="jobTitle">VP of Sales</h3>
        </div>
      </div>
      <div className="employee">
        <img src="../src/images/imagePaul.png" className="image" alt="icon" />
        <div className="name">
          <h3>Paul Jones</h3>
          <h3 className="jobTitle">QA Manager</h3>
        </div>
      </div>

      
    </div>
  )
}
