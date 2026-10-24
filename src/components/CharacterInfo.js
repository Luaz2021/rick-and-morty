import React from 'react';
import { generalId } from '../helpers/locationHelpers';

export const CharacterInfo = ({ character = {} }) => {
    const firstEpisodeUrl = character.episode && character.episode.length > 0 ? character.episode[0] : null;
    const firstEpisodeId = firstEpisodeUrl ? generalId(firstEpisodeUrl) : null;

    return (
        <section className='info'>
            <article>
                <h3>Species</h3>
                <p>{character.species || "Unknown"}</p>
            </article>
            <article>
                <h3>Origin</h3>
                <p>{character.origin?.name || "Unknown"}</p>
            </article>
            <article>
                <h3>First Apparition</h3>
                <p>
                    {firstEpisodeId ? `Episode ${firstEpisodeId}` : "N/A"}
                </p>
            </article>
        </section>
    );
};
