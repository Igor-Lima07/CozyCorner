import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

const APIKEY = "1299216cd8ab4642b26d4cc9a057eca9"
const url = `https://api.rawg.io/api/games?key=${APIKEY}`;

async function Api () {
    const response = await fetch(url);
    console.log(response);

}

Api();

export default Api

