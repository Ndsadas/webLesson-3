import css from '../css/style.css'
import { drawGalleryItem } from './item.js';
import items from './items.js'

const drawGallery = document.getElementById('gallery');

items.map(item => drawGallery.appendChild(drawGalleryItem(item)))