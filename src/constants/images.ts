import unknownArtistImage from '@/assets/unknown_artist.jpeg'
import unknownTrackImage from '@/assets/unknown_track.jpeg'
import { Image } from 'react-native'

export const unknownTrackImageUri = Image.resolveAssetSource(unknownTrackImage).uri
export const unknownArtistImageUri = Image.resolveAssetSource(unknownArtistImage).uri
