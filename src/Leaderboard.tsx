import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

interface Memory {
    id:number,
    month: number,
    day: number,
    year: number,
    memory: string,
    place: string,
    name: string,
    show_name: boolean
}

function renderMemory(memory: Memory) {
    return <tr key={memory.id}>
        <td>{memory.name}</td>
        <td>{memory.memory}</td>
        <td>{memory.place}</td>
    </tr>
}

export default function Leaderboard() {

    const [memories, setMemories] = useState([] as Memory[]);

    useEffect(() => {
        fetch('/.netlify/functions/getMemories').then(c=>c.text().then(c=>console.log(c)));
        /*
            .then(response => response.json() as Promise<Leader[]>)
            .then(data => setLeaders(data));
            */
           setMemories([]);
        }, []);

    return <>
        <h2>Memories</h2>
        {memories.length === 0 ? 
        null
        :
            <table className="table leader-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Memory</th>
                        <th>Place</th>
                    </tr>
                </thead>
                <tbody>
                    {memories.map(m => renderMemory(m))}
                </tbody>
            </table>
        }
    </>
}

