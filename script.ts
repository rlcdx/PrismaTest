import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // GET ALL SONGS
    const songs = await prisma.songs.findMany()

    // GET SONG BY ID
    // const song = await prisma.songs.findFirst({
    //     where: {
    //         id: 10
    //     }
    // })

    // CREATE NEW SONG
    // const song = await prisma.songs.create({
    //     data: {
    //         title: "Sugar, We're Goin Down",
    //         artist: 'Fall Out Boy',
    //         releaseYear: 2005
    //     }
    // })

    // UPDATE SONG
    // const song = await prisma.songs.update({
    //     where: { id: 18 },
    //     data: { releaseYear: 2000 }
    // })

    // DELETE SONG
    // const song = await prisma.songs.deleteMany({})

    console.log(songs)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })