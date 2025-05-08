/**
 * Utility functions for prompt selection and image downloading.
 */

import { surpriseMePrompts } from "../constants";
import FileSaver from 'file-saver'

/**
 * Returns a random prompt from the surpriseMePrompts array that is different from the current prompt.
 * @param {string} prompt - The current prompt to avoid repeating.
 * @returns {string} A new random prompt.
 */
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length)
    const randomPrompt = surpriseMePrompts[randomIndex]

    // If the random prompt is the same as the current, recursively try again
    if (randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt
}

/**
 * Triggers a download of the provided image using FileSaver.
 * @param {string} _id - The unique identifier for the image.
 * @param {Blob|string} photo - The image data to download.
 * @returns {Promise<void>}
 */
export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpeg`)
}
