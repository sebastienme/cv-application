/* eslint-disable react/prop-types */
import { useState } from "react"
import { CV } from "./CV"
import { Button } from "./Utilities"
import { v4 as uuidv4 } from 'uuid';

export const Card = ({children}) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export const UserForm = () => {
    const initialData = {
        fullName: 'François Pignon',
        email: 'francois.pignon@gmail.com',
        phone: '514-222-2222',
        address: 'Montréal, Qc, Canada',
        education: [
            {
                id: uuidv4(),
                school: 'Université du Québec à Montréal',
                degree: 'Maîtrise en fiscalité',
                startDate: 'Septembre 1978',
                endDate: '1982',
                location: 'Montréal, Qc'
            },
            {
                id: uuidv4(),
                school: 'HEC Montréal',
                degree: 'Baccalauréat en comptabilité',
                startDate: 'Septembre 1974',
                endDate: '1977',
                location: 'Montréal, Qc'
            },
        ],
        work: [
            {
                id: uuidv4(),
                companyName: 'Gouvernement du Québec',
                positionTitle: `Chef, à l'impôt`,
                workStartDate: '1984',
                workEndDate: '2018',
                workLocation: 'Montréal, Qc',
                description: `Superviser et coordonner les activités liées à la collecte des impôts dans la province. 
                            Responsable de la gestion des équipes chargées de l'application des lois fiscales, de veiller à la conformité des contribuables
                            et de mettre en œuvre des politiques visant à maximiser les recettes tout en assurant l'équité et la transparence dans le système fiscal.` 
            },
            {
                id: uuidv4(),
                companyName: 'Impôt Expo',
                positionTitle: `Président`,
                workStartDate: '2020',
                workEndDate: `Aujourd'hui`,
                workLocation: 'Brossard, Qc',
                description: `En collaboration avec les équipes de direction, vous êtes chargé de définir la vision et les objectifs de l'entreprise,
                             de superviser la mise en œuvre de stratégies commerciales efficaces, et de veiller à ce que les opérations répondent aux normes de qualité
                             tout en restant conformes aux réglementations fiscales en vigueur. En tant que leader, vous êtes également responsable de la promotion
                             du développement de l'entreprise, de la gestion des relations avec les clients et des décisions stratégiques visant à assurer la croissance
                             et la pérennité de la société dans le secteur des services fiscaux.` 
            }
        ]
    }
    
    const [data, setData] = useState(initialData);
    const [showForm, setShowForm] = useState(false);
    const [showWorkForm, setShowWorkForm] = useState(false);
    const [educationId, setEducationId] = useState('whateverId');
    const [workId, setWorkId] = useState('whateverId');

    const handleChange = (e, index, category) => {
        const { id, value } = e.target;
      
        setData((prevData) => {
          const newData = { ...prevData };
      
          if (category === 'education') {
            newData.education[index] = {
              ...newData.education[index],
              [id]: value,
            };
          } else if (category === 'work') {
            newData.work[index] = {
              ...newData.work[index],
              [id]: value,
            };
          } else {
            newData[id] = value;
          }
      
          return newData;
        });
    };

    const handleShowForm = () => {
        setShowForm(!showForm);
    }

    const handleShowWorkForm = () => {
        setShowWorkForm(!showWorkForm);
    }

    const handleShowInstance = (schoolId) => {
        handleShowForm();
        setEducationId(schoolId);
    };

    const handleShowWorkInstance = (professionId) => {
        handleShowWorkForm();
        setWorkId(professionId);
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        handleShowForm();
    }

    const handleSubmitWork = (e) => {
        e.preventDefault();
        handleShowWorkForm();
    }

    const addSchool = () => {
        handleShowForm();
        const newId = uuidv4();
        setData((prevData) => {
          const newEducation = {
            id: newId,
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
          };

          return {
            ...prevData,
            education: [...prevData.education, newEducation],
          };
        });
        handleShowInstance(newId)
    };

    const AddWork = () => {
        handleShowWorkForm();
        const newId = uuidv4();
        setData((prevData) => {
            const newWork = {
                id: newId,
                companyName: '',
                positionTitle: '',
                workStartDate: '',
                wordEndDate: '',
                workLocation: '',
                description: '',
            };

            return {
                ...prevData,
                work: [...prevData.work, newWork],
            };
        });
        handleShowWorkInstance(newId);
    }

    const handleDelete = () => {
        handleShowForm();
        setData((prevData) => {
            const updatedEducation = prevData.education.filter(
                (item) => item.id !== educationId
            )
            return {
                ...prevData,
                education : updatedEducation,
            }
        })
    }

    const handleDeleteWork = () => {
        handleShowWorkForm();
        setData((prevData) => {
            const updateWork = prevData.work.filter(
                (item) => item.id !== workId
            )
            return {
                ...prevData,
                work: updateWork,
            }
        })
    }

    const clearForm = () => {
        setData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          education: [{
            id: '',
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            location: '',
          }],
          work: [{
            id: '',
            companyName: '',
            positionTitle: '',
            workStartDate: '',
            workEndDate: '',
            workLocation: '',
            description: '',
          }]
        });
        setEducationId('');
        setWorkId('');
        setShowForm(true);
        setShowWorkForm(true);
      };

      const goBackToInitialData = () => {
        setData(initialData);
        setEducationId(initialData.education[0].id)
        setWorkId(initialData.work[0].id)
      }

    return (
        <>
            <div className="form-side">
                <div className="form-side__style">
                <div className="form-side__style__box">
                </div>
                </div>
                <div className="form-side__content">
                    <Card>
                        <ClearCard
                            clearForm={clearForm}
                            initialData={goBackToInitialData}
                        />
                    </Card>
                    <Card>
                        <h2>Détails Personnels</h2>
                        <CardPersonal
                            data={data}
                            handleChange={handleChange}
                        />         
                    </Card>
                    <Card>
                        <h2>Éducation</h2>
                        <CardEducation
                            data={data}
                            educationId={educationId}
                            showForm={showForm}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            handleDelete={handleDelete}
                            handleShowInstance={handleShowInstance}
                            handleAddSchool={addSchool}
                        />         
                    </Card>
                    <Card>
                        <h2>Expérience</h2>
                        <CardJob
                            data={data}
                            handleChange={handleChange}
                            workId={workId}
                            showForm={showWorkForm}
                            handleSubmit={handleSubmitWork}
                            handleDelete={handleDeleteWork}
                            handleShowInstance={handleShowWorkInstance}
                            handleAddWork={AddWork}
                        />
                    </Card>
                </div>
            </div>
            <div className="cv-side">
                <CV
                    data={data}
                />
            </div>
        </>
    )
}

const ClearCard = ({clearForm, initialData}) => {
    return (
        <>
            <div className="clear-card">
                <div 
                    className="clear-resume"
                    onClick={clearForm} 
                ><img src="../public/delete.png" alt="" /> Effacer le CV</div>
                <button
                    className="btn btn-example"
                    onClick={initialData}
                >Charger l'Exemple</button>
            </div>
        </>
    )
}

export const CardPersonal = ({data, handleChange}) => {
    return (
        <>
            <form id="personnal-details-form">
                <label>Nom Complet</label>
                <input 
                    id="fullName"
                    value={data.fullName}
                    onChange={handleChange}
                />

                <label>Courriel</label>
                <input 
                    id="email"
                    value={data.email}
                    onChange={handleChange}
                />

                <label>Téléphone</label>
                <input 
                    id="phone"
                    value={data.phone}
                    onChange={handleChange}
                />

                <label>Adresse</label>
                <input 
                    id="address" 
                    value={data.address}
                    onChange={handleChange} 
                />
            </form>
        </>
    )
}

export const CardEducation = ({data, showForm, educationId, handleChange, handleSubmit, handleDelete, handleShowInstance, handleAddSchool}) => {
    return (
        <>
            {showForm ?
                (<form id="education-form">
                    {data.education.map((item, index) => (
                        (item.id === educationId && 
                            <div key={item.id}>
                                <label>École</label>
                                <input 
                                    id="school"
                                    value={item.school}
                                    onChange={(e) => handleChange(e, index, 'education')}
                                />
                
                                <label>Diplôme</label>
                                <input 
                                    id="degree"
                                    value={item.degree}
                                    onChange={(e) => handleChange(e, index, 'education')}
                                />
                                <div className="date-pick">
                                    <div className="date-pick__start">
                                        <label>Date de Début</label>
                                        <input 
                                            id="startDate"
                                            value={item.startDate}
                                            onChange={(e) => handleChange(e, index, 'education')}
                                        />
                                    </div>
                                    <div className="date-pick__end">
                                        <label>Date de Fin</label>
                                        <input 
                                            id="endDate"
                                            value={item.endDate}
                                            onChange={(e) => handleChange(e, index, 'education')}
                                        />
                                    </div>
                                </div>
                                <label>Emplacement</label>
                                <input 
                                    id="location"
                                    value={item.location}
                                    onChange={(e) => handleChange(e, index, 'education')}
                                />
                            </div>
                        ) 
                    ))}
                    <div className="edit-buttons">
                        <div className="edit-buttons__delete">
                            <Button
                                className="edit-btn btn-plain"
                                text="Supprimer"
                                handleClick={handleDelete}
                            />
                        </div>
                        <div className="edit-buttons__other">
                            <Button
                                className="edit-btn btn-full"
                                text="Sauvegarder"
                                type="submit"
                                handleClick={handleSubmit}
                            /> 
                        </div>
                    </div>
                </form>
                ) : 
                <>
                    <div className="school-list">
                        {data.education.map(item => (
                            <a key={item.id} onClick={() => handleShowInstance(item.id)}><div className="school-instance">{item.school}</div></a>
                        ))}
                    </div>
                    <div className="school-add-container">
                        <Button
                            className="btn-plain add-btn"
                            text="Ajouter"
                            handleClick={handleAddSchool}
                        />
                    </div>
                </>
            }
        </>
    )
}

export const CardJob = ({data, handleChange, workId, showForm, handleShowInstance, handleAddWork, handleDelete, handleSubmit}) => {
    return (
        <>
            {showForm ?
                (<form id="experience-form">
                    {data.work.map((item,index) => (
                        (item.id === workId &&
                            <div key={item.id}>{console.log("Card work: " + item.id)}
                                <label>Nom de l'Entreprise</label>
                                <input 
                                    id="companyName"
                                    value={item.companyName}
                                    onChange={(e) => handleChange(e, index, 'work')}
                                />

                                <label>Position</label>
                                <input 
                                    id="positionTitle"
                                    value={item.positionTitle}
                                    onChange={(e) => handleChange(e, index, 'work')}
                                />
                                <div className="date-pick">
                                    <div className="date-pick__start">
                                        <label>Date de Début</label>
                                        <input 
                                            id="workStartDate"
                                            value={item.workStartDate}
                                            onChange={(e) => handleChange(e, index, 'work')}
                                        />
                                    </div>
                                    <div className="date-pick__start">
                                        <label>Date de Fin</label>
                                        <input 
                                            id="workEndDate"
                                            value={item.workEndDate}
                                            onChange={(e) => handleChange(e, index, 'work')}
                                        />
                                </div>
                                </div>
                                <label>Emplacement</label>
                                <input 
                                    id="workLocation"
                                    value={item.workLocation}
                                    onChange={(e) => handleChange(e, index, 'work')}
                                />

                                <label>Description</label>
                                <textarea
                                    id="description"
                                    value={item.description}
                                    onChange={(e) => handleChange(e, index, 'work')}
                                />
                            </div>
                        )
                    ))}
                    <div className="edit-buttons">
                        <div className="edit-buttons__delete">
                            <Button
                                className="edit-btn btn-plain"
                                text="Supprimer"
                                handleClick={handleDelete}
                            />
                        </div>
                        <div className="edit-buttons__other">
                            <Button
                                className="edit-btn btn-full"
                                text="Sauvegarder"
                                type="submit"
                                handleClick={handleSubmit}
                            /> 
                        </div>
                    </div>
                </form>
                ) :
                <>
                    <div className="work-list">
                        {data.work.map(item => (
                            <a key={item.id} onClick={() => handleShowInstance(item.id)}><div className="work-instance">{item.companyName}</div></a>
                        ))}
                    </div>
                    <div className="work-add-container">
                        <Button
                            className="btn-plain add-btn"
                            text="Ajouter"
                            handleClick={handleAddWork}
                        />
                    </div>
                </>
            }

        </>
    )
}